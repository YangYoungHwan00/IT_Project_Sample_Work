import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import './Style/Home.css';
import Table from './Table';
import Filter from './Filter';
import Menu from './Menu';


function Home(){
  const [emp,setEmp] = useState(null);
  const style = {
    color : 'red',
    display: 'block'
  }

  function delBtnHandler(){
    var del_btn = document.getElementById('del_btn');
    const e_id = del_btn.value;
    const api_url = 'http://127.0.0.1:8000/emp/id=';
    fetch(api_url + e_id,{
      method: 'DELETE',
    })
  }

  function menuModal(){ 
    var $modal = document.getElementById('modal_container');
    const str = $modal.classList;
    if($modal.classList.contains('d_none')) {
      $modal.classList.remove('d_none');
    }
    else{
      $modal.classList.add('d_none');
    }
  }

    return(
      <div id='Home'>
        
        <nav>
          <Link to='/another'>main</Link><br/>
        </nav>
        <Menu />
        <input id='del_btn' type='input'></input>
        <input type='button' value='delete row' onClick={delBtnHandler}/><br />
        <h1><p>E Manager</p></h1>
        <Filter />
        <Table />
      </div>
    );
  }

export default Home;
