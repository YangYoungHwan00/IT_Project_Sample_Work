import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import './Style/Home.css';
import Filter from './Filter';


function Home(){
  const [emp,setEmp] = useState(null);
  const style = {
    color : 'red',
    display: 'block'
  }

  useEffect(() => {
    fetch('http://127.0.0.1:8000/emp')
      .then((response) => response.json())
      .then((data) => setEmp(data));
  },[]);

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

  function updateEmp(e){
    const apiAddress = 'http://127.0.0.1:8000/emp/id=';
    const tr_id = e.target.id.slice(1);
    const EMPNO = document.getElementById('a'+tr_id).value;
    const NAME = document.getElementById('b'+tr_id).value;
    const BIRTHDAY = document.getElementById('c'+tr_id).value;
    const DEPTNO = document.getElementById('d'+tr_id).value;
    const HOBBY = document.getElementById('e'+tr_id).value;
    const PAY = document.getElementById('f'+tr_id).value;
    const POSITION = document.getElementById('g'+tr_id).value;
    const TYPE = 'pp';
    const TEL = 'good';
    const PEMPNO = 33;
    const serverAddress = apiAddress + tr_id;
    console.log(serverAddress);
    fetch(serverAddress, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        EMPNO,
        NAME,
        BIRTHDAY,
        DEPTNO,
        HOBBY,
        PAY,
        POSITION,
        TYPE,
        TEL,
        PEMPNO,
      }),
    })
  }

  function empEdit(e){
    var target = e.target;
    var tr_id = target.id.slice(1);
    if(target.classList.contains('btn_status_red'))
    {
      document.getElementById('a'+tr_id).readOnly = false;
      document.getElementById('b'+tr_id).readOnly = false;
      document.getElementById('c'+tr_id).readOnly = false;
      document.getElementById('d'+tr_id).readOnly = false;
      document.getElementById('e'+tr_id).readOnly = false;
      document.getElementById('f'+tr_id).readOnly = false;
      document.getElementById('g'+tr_id).readOnly = false;
      target.classList.remove('btn_status_red');
      target.classList.add('btn_status_green');
    }
    else
    {
      document.getElementById('a'+tr_id).readOnly = true;
      document.getElementById('b'+tr_id).readOnly = true;
      document.getElementById('c'+tr_id).readOnly = true;
      document.getElementById('d'+tr_id).readOnly = true;
      document.getElementById('e'+tr_id).readOnly = true;
      document.getElementById('f'+tr_id).readOnly = true;
      document.getElementById('g'+tr_id).readOnly = true;
      target.classList.remove('btn_status_green');
      target.classList.add('btn_status_red');
      updateEmp(e);
    }
  }

    return(
      <div id='Home'>
        <div id='modal_container' className='modal_container d_none'> 
          <div id='menu'>
            <nav id='link'>
              <Link to='/register'>e register</Link>
            </nav>
          </div> 
        </div>
        <nav>
          <Link to='/another'>main</Link><br/>
        </nav>
        
        <button id='menu_btn' onClick={menuModal}>menu</button><br />
        <input id='del_btn' type='input'></input>
        <input type='button' value='delete row' onClick={delBtnHandler}/><br />
        <h1><p>E Manager</p></h1>
        
        { emp&&emp.map((d,index) => (
            <div key={d.id}>{d.id}</div>
        ))}
        <label style={style}>{emp&&emp[1].id}</label>
        
        
        <Filter />
      </div>
    );
  }

export default Home;
