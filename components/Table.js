import React,{useState,useEffect} from 'react'
import classes from '../styles/Table.module.css'
import Link from 'next/link'
import { useRouter } from "next/router";
import {useDispatch,useSelector} from 'react-redux'
import { upHandler,downHandler, includeHandler, equalHandler,filterHandler } from '../store/action';


export default function Table(props) {
    const router =useRouter()
    const dispatch = useDispatch()
    const dataArr = useSelector(state=>state.items.data)
    const includeArr = useSelector(state=>state.items.includeArr)
    const [name,setName] = useState('')
    const[sorting,setSorting] = useState('')
    const [inputValue,setInputValue] = useState('')
   const changeInput=(e)=>{
     setInputValue(e.target.value)
   }
    
    useEffect(()=>{
        if(sorting === 'больше'){
           dispatch(upHandler(name))
        }else if(sorting === 'меньше'){
           dispatch(downHandler(name))
        }else if(sorting === 'равно'){
            dispatch(equalHandler(name,inputValue.charAt(0).toUpperCase() + inputValue.slice(1),dataArr))
         }
         else if(sorting === 'содержит' && inputValue){
            dispatch(includeHandler(name,inputValue.charAt(0).toUpperCase() + inputValue.slice(1)))
         }
    },[sorting,name,props.pagCount,inputValue])
    
  
   let mainArr = sorting === 'содержит' && inputValue ? includeArr.slice(props.firstSl,props.secondSl) : props.data
    
    
    const [pagCount,setPagCount] = useState({
        first:1,
        second:2,
        third:3,
        fourth:4,
        fifth:5,
        sixth:6
    })
    const changeName =(e)=>{
    setName(e.target.value)
    }
    const changeSorting =(e)=>{
        setSorting(e.target.value)
        }
   const next=()=>{
    setPagCount(prevst=>{
        return {
            first:prevst.first +1,
            second:prevst.second +1,
            third:prevst.third +1,
            fourth:prevst.fourth +1,
            fifth:prevst.fifth + 1,
            sixth:prevst.sixth + 1
        }
    })
   }
   const prev=()=>{
    setPagCount(prevst=>{
        return {
            first:prevst.first -1,
            second:prevst.second -1,
            third:prevst.third -1,
            fourth:prevst.fourth -1,
            fifth:prevst.fifth - 1,
            sixth:prevst.sixth - 1
        }
    })
   }
  return (
    <div className={classes.pag}>
    <div className={classes.table}>
    <table border={1} width='77%' cellPadding={2} cellSpacing={0} >
    <thead>
       <tr>
        <th>Дата</th>
        <th>Название</th>
        <th>Количество</th>
        <th>Расстояние</th>
       </tr>
    </thead>
    <tbody>
      {mainArr.map(item=>{
        return(
          <tr key={item.id}>
          <td>{item.date}</td>
          <td>{item.name}</td>
          <td>{item.amount}</td>
          <td>{item.distance}</td>
        </tr>
        )
      })}
      
    </tbody>
    </table>
    <div className={classes.sel}>
    <label htmlFor='filter'>Filter by:</label>
    <div style={{display:'flex',flexDirection:'row'}}>
        <div className={classes.option}>
        <div>Колонка</div>
    <select name='Filter' id='filter' value={name} onChange={changeName}>
    <option  hidden>Выбрать</option>
      <option value='name'>Название</option>
      {sorting === 'содержит' ? '' : <option value='amount'>Количество</option>}
      {sorting === 'содержит' ? '' : <option value='distance'>Расстояние</option>}
    </select>
    </div>
    <div className={classes.option}>
    <div>Условия</div>
    <select id='filter' value={sorting} onChange={changeSorting}>
    <option  hidden>Выбрать</option>
      <option value='равно'>равно</option>
      <option value='содержит'>содержит</option>
      <option value='больше'>больше</option>
      <option value='меньше'>меньше</option>
    </select>
    </div>
    </div>
    <p style={{margin:0,fontSize:'10px'}}>Выберите Условия "Содержит" или "Равно" для открытия поля ввода</p>
    {sorting == 'равно' | sorting == 'содержит' ? <input style={{width:'11rem'}} id='filter' placeholder='введите значение' onChange={changeInput} /> : ''}
    </div>
  </div>
  <div className={classes.pagination}>
  {pagCount.first>1 && <Link href={`/table/${+router.query.id-1}`}><a onClick={prev} type='button'>&laquo;</a></Link>}
  <Link  href={`/table/${pagCount.first}`}><a className={router.asPath === `/table/${pagCount.first}` ? classes.active : ""}>{pagCount.first.toString()}</a></Link>
  <Link href={`/table/${pagCount.second}`}><a className={router.asPath === `/table/${pagCount.second}`  ? classes.active : ""} >{pagCount.second.toString()}</a></Link>
  <Link href={`/table/${pagCount.third}`}><a className={router.asPath === `/table/${pagCount.third}`  ? classes.active : ""} >{pagCount.third.toString()}</a></Link>
  <Link href={`/table/${pagCount.fourth}`}><a className={router.asPath === `/table/${pagCount.fourth}`  ? classes.active : ""} >{pagCount.fourth.toString()}</a></Link>
  <Link href={`/table/${pagCount.fifth}`}><a className={router.asPath === `/table/${pagCount.fifth}`  ? classes.active : ""} >{pagCount.fifth.toString()}</a></Link>
  <Link href={`/table/${pagCount.sixth}`}><a className={router.asPath === `/table/${pagCount.sixth}`  ? classes.active : ""} >{pagCount.sixth.toString()}</a></Link>
  <Link href={`/table/${+router.query.id+1}`}><a onClick={next} type='button'>&raquo;</a></Link>
</div>
</div>
  )
}

