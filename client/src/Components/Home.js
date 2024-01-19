import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import './Style/Home.css';
import Table from './Table';
import Menu from './Menu';


function Home(){
  
  function delBtnHandler(){
    var del_btn = document.getElementById('del_btn');
    const e_id = del_btn.value;
    const api_url = 'http://127.0.0.1:8000/emp/id=';
    fetch(api_url + e_id,{
      method: 'DELETE',
    })
  }

    return(
      <div id='Home'>
        <div className='header'>
          <Link to='/'><p className='title'>E Manager</p></Link>
        </div>
        <Menu />
        <div id='table_component_container'>
          <Table />
        </div>
        <input id='del_btn' type='input'></input>
        <input type='button' value='delete row' onClick={delBtnHandler} /><br />
      </div>
    );
  }

export default Home;
