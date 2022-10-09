import React, { useState, useEffect } from "react";
import classes from "../styles/Table.module.css";
import Pagination from "./Pagination";
import Filter from "./Filter";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  upHandler,
  downHandler,
  includeHandler,
  equalHandler,
} from "../store/action";

export default function Table(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const dataArr = useSelector((state) => state.items.data);
  const includeArr = useSelector((state) => state.items.includeArr);
  const [name, setName] = useState("");
  const [sorting, setSorting] = useState("");
  const [inputValue, setInputValue] = useState("");
  const changeInput = (e) => {
    setInputValue(e.target.value);
  };
  let mainArr =
    sorting === "содержит" && inputValue
      ? includeArr.slice(props.firstSl, props.secondSl)
      : props.data;
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeSorting = (e) => {
    setSorting(e.target.value);
  };
  useEffect(() => {
    if (sorting === "больше") {
      dispatch(upHandler(name));
    } else if (sorting === "меньше") {
      dispatch(downHandler(name));
    } else if (sorting === "равно") {
      dispatch(
        equalHandler(
          name,
          inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
          dataArr
        )
      );
    } else if (sorting === "содержит" && inputValue) {
      dispatch(
        includeHandler(
          name,
          inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
        )
      );
    }
  }, [sorting, name, props.pagCount, inputValue, dispatch]);

  return (
    <div className={classes.pag}>
      <div className={classes.table}>
        <table border={1} width="77%" cellPadding={2} cellSpacing={0}>
          <thead>
            <tr>
              <th>Дата</th>
              <th>Название</th>
              <th>Количество</th>
              <th>Расстояние</th>
            </tr>
          </thead>
          <tbody>
            {mainArr.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                  <td>{item.distance}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Filter
          name={name}
          sorting={sorting}
          changeInput={changeInput}
          changeName={changeName}
          changeSorting={changeSorting}
        />
      </div>
      <Pagination router={router} />
    </div>
  );
}
