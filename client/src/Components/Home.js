import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import './Style/Home.css';


function Home(){
  const [emp,setEmp] = useState(null);
  let array = [];
  const style = {
    color : 'red',
    display: 'block'
  }

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api')
      .then((response) => response.json())
      .then((data) => setEmp(data));
  },[]);

  function delBtnHandler(){
    var del_btn = document.getElementById('del_btn');
    const e_id = del_btn.value;
    const api_url = 'http://127.0.0.1:8000/api/id=';
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
    const apiAddress = 'http://127.0.0.1:8000/api/id=';
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

  array = emp;
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
        <label style={style}>{array&&array[2].id}</label>
        
        
        <div id='e_table_container'>
          <table id='e_info_table'>
            <thead>
              <tr className='table_head'>
                <th className='t_head'><div className="t_div">E_NO</div></th>
                <th className='t_head'><div className="t_div">NAME</div></th>
                <th className='t_head'><div className="t_div">BIRTHDAY</div></th>
                <th className='t_head'><div className="t_div">DEPTNO</div></th>
                <th className='t_head'><div className="t_div">HOBBY</div></th>
                <th className='t_head'><div className="t_div">PAY</div></th>
                <th className='t_head'><div className="t_div">POSITION</div></th>
                <th className='t_head'><div className="t_div">EDIT</div></th>
              </tr>
            </thead>
            <tbody>
              { emp&&emp.map((data) => (
                  <tr className='table_tuple' id={'r' + data.id}>
                    <td><input className="user_info_capsule" readOnly id={'a' + data.id} defaultValue = {data.EMPNO} /></td>
                    <td><input className="user_info_capsule" readOnly id={'b' + data.id} defaultValue = {data.NAME} /></td>
                    <td><input className="user_info_capsule" readOnly id={'c' + data.id} defaultValue = {data.BIRTHDAY} /></td>
                    <td><input className="user_info_capsule" readOnly id={'d' + data.id} defaultValue = {data.DEPTNO} /></td>
                    <td><input className="user_info_capsule" readOnly id={'e' + data.id} defaultValue = {data.HOBBY} /></td>
                    <td><input className="user_info_capsule" readOnly id={'f' + data.id} defaultValue = {data.PAY} /></td>
                    <td><input className="user_info_capsule" readOnly id={'g' + data.id} defaultValue = {data.POSITION} /></td>
                    <td><div className="user_info_capsule"><button className='edit_btn btn_status_red' id= {'k' + data.id} onClick={empEdit}>
                      <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"
                    xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg></button></div></td>
                  </tr>
              ))}          
            </tbody>
                            
          </table>
        </div>
      </div>
    );
  }

export default Home;
