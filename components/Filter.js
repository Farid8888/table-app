import React from 'react'
import classes from '../styles/Filter.module.css'


export default function Filter({name,sorting,changeName,changeInput,changeSorting}) {
  return (
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
    <p style={{margin:0,fontSize:'10px'}}>Выберите Условия {"Содержит"} или {"Равно"} для открытия поля ввода</p>
    {sorting == 'равно' | sorting == 'содержит' ? <input style={{width:'11rem'}} id='filter' placeholder='введите значение' onChange={changeInput} /> : ''}
    </div>
  )
}
