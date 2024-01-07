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

  function clearAllInputs(e){
    var allInputs = document.querySelectorAll('.e_info_input');
    allInputs.forEach(singleInput => singleInput.value = '');
  }  

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api')
      .then((response) => response.json())
      .then((data) => setEmp(data));
  },[]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    var inputs = document.querySelectorAll('.e_info_input');
    const EMPNO = e.target.EMPNO.value;
    const NAME = e.target.NAME.value;
    const BIRTHDAY = e.target.BIRTHDAY.value;
    const DEPTNO = e.target.DEPTNO.value;
    const EMP_TYPE = e.target.EMP_TYPE.value;
    const TEL = e.target.TEL.value;
    const HOBBY = e.target.HOBBY.value;
    const PAY = e.target.PAY.value;
    const POSITION = e.target.POSITION.value;
    const PEMPNO = e.target.PEMPNO.value;

    fetch('http://127.0.0.1:8000/api', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        EMPNO,
        NAME,
        BIRTHDAY,
        DEPTNO,
        EMP_TYPE,
        TEL,
        HOBBY,
        PAY,
        POSITION,
        PEMPNO,
      }),
    })
    clearAllInputs();
  }

  function delBtnHandler(){
    var del_btn = document.getElementById('del_btn');
    const e_id = del_btn.value;
    const api_url = 'http://127.0.0.1:8000/api/id=';
    fetch(api_url + e_id,{
      method: 'DELETE',
    })
  }

  function updateBtnHandler(){
    var put_btn = document.getElementById();
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

  array = emp;
    return(
      <div id='Home'>
        <div id='modal_container' class='modal_container'> 
          <div>
            holy shit
          </div> 
        </div>
        <nav>
          <Link to='/Another'>main</Link><br/>
        </nav>
        
        <button onClick={menuModal}>menu</button><br />
        <input id='del_btn' type='input'></input>
        <input type='button' value='delete row' onClick={delBtnHandler}/><br />
        <input id='put_btn' type='input' />
        <input type='button' value='update'></input>
        <h1><p>E Manager</p></h1>
        
        { emp&&emp.map((d,index) => (
            <div key={d.id}>{d.id}</div>
        ))}
        <label style={style}>{array&&array[2].id}</label>
        
        <form id='e_info_input_form' onSubmit={onSubmitHandler}>
          <div id='e_info_container'>
            <div id='e_info_input_label_container'>
              <label className='e_info_input_label'>E_NO</label><br />
              <label className='e_info_input_label'>NAME</label><br />
              <label className='e_info_input_label'>BIRTH</label><br />
              <label className='e_info_input_label'>D_NO</label><br />
              <label className='e_info_input_label'>TYPE</label><br />
              <label className='e_info_input_label'>TEL</label><br />
              <label className='e_info_input_label'>HOBBY</label><br />
              <label className='e_info_input_label'>PAY</label><br />
              <label className='e_info_input_label'>POSITION</label><br />
              <label className='e_info_input_label'>P_NO</label><br />
            </div>
            <div id='e_info_input_container'>
              <input className='e_info_input' type='text' name='EMPNO' /><br />
              <input className='e_info_input' type='text' name='NAME' /><br />
              <input className='e_info_input' type='date' name='BIRTHDAY' /><br />
              <input className='e_info_input' type='text' name='DEPTNO' /><br />
              <input className='e_info_input' type='text' name='EMP_TYPE' /><br />
              <input className='e_info_input' type='text' name='TEL' /><br />
              <input className='e_info_input' type='text' name='HOBBY' /><br />
              <input className='e_info_input' type='number' name='PAY' /><br />
              <input className='e_info_input' type='text' name='POSITION' /><br />
              <input className='e_info_input' type='number' name='PEMPNO' /><br />
            </div>
            <input type='submit' value='go' /><br/>
          </div>
        </form>
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
              { emp&&emp.map((data, index) => (
                  <tr className='table_tuple'>
                    <td><div className="user_info_capsule">{data.EMPNO}</div></td>
                    <td><div className="user_info_capsule">{data.NAME}</div></td>
                    <td><div className="user_info_capsule">{data.BIRTHDAY}</div></td>
                    <td><div className="user_info_capsule">{data.DEPTNO}</div></td>
                    <td><div className="user_info_capsule">{data.HOBBY}</div></td>
                    <td><div className="user_info_capsule">{data.PAY}</div></td>
                    <td><div className="user_info_capsule">{data.POSITION}</div></td>
                    <td><div className="user_info_capsule"><div class='edit_btn_wrapper'><button class='edit_btn'><svg class="feather feather-edit" fill="none" height="24" stroke="currentColor" 
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                      </svg></button></div></div></td>
                  </tr>
              ))}          
            </tbody>
                            
          </table>
        </div>
      </div>
    );
  }

export default Home;
