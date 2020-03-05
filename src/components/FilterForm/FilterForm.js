import React from 'react';
import classes from './FilterForm.module.css';

import searchIcon from '../../img/search-icon.svg';

const Filter = ( { filterData, getFinallyFiltered }) => {

    return (
        <form className={classes.FilterForm} action="/">
            <img src={searchIcon} alt="Search Icon"/>
            <input onChange={(e)=>filterData(e.target.value)} type="text" placeholder="Поиск"/>
            <button className="blackBtn" onClick={(e)=>{e.preventDefault(); getFinallyFiltered(e)}}>Найти</button>
        </form>
    )
}

export default Filter;