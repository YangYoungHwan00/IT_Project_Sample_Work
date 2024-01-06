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
    var allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');
  }

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api')
      .then((response) => response.json())
      .then((data) => setEmp(data));
  },[]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
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

  array = emp;
    return(
      <div id='Home'>
        <nav>
          <Link to='/Another'>main</Link><br/>
        </nav>
        <input type='button' value='delete row' />

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
        <div id='e_table_container' style={{display : 'inline-block'}}>
          <table id='e_info_table'>
            <thead>
              <tr className='table_head'>
                <th><div className="t_div">E_NO</div></th>
                <th><div className="t_div">NAME</div></th>
                <th><div className="t_div">BIRTHDAY</div></th>
                <th><div className="t_div">DEPTNO</div></th>
                <th><div className="t_div">HOBBY</div></th>
                <th><div className="t_div">PAY</div></th>
                <th><div className="t_div">POSITION</div></th>
                <th><div className="t_div">EDIT</div></th>
              </tr>
            </thead>
            <tbody>
              { emp&&emp.map((data, index) => (
                  <tr className='table_tuple'>
                    <td><div className="user_info_capsule">{data.EMPNO}</div></td>
                    <td><div className="user_info_capsule">{data.ENAME}</div></td>
                    <td><div className="user_info_capsule">{data.BIRTHDAY}</div></td>
                    <td><div className="user_info_capsule">{data.DEPTNO}</div></td>
                    <td><div className="user_info_capsule">{data.HOBBY}</div></td>
                    <td><div className="user_info_capsule">{data.PAY}</div></td>
                    <td><div className="user_info_capsule">{data.POSITION}</div></td>
                    <td><div className="user_info_capsule">*</div></td>
                  </tr>
              ))}          
            </tbody>
                            
          </table>
        </div>
      </div>
    );
  }

export default Home;
