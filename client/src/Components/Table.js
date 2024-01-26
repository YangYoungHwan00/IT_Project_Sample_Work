import React, {useState, useEffect} from 'react';
import './Style/Table.css';


function Table(){

    const [emp,setEmp] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/emp')
          .then((response) => response.json())
          .then((data) => setEmp(data));
      },[]);

    function updateEmp(e){
        const apiAddress = 'http://127.0.0.1:8000/emp/id=';
        const tr_id = e.target.id.slice(1);
        const EMPNO = document.getElementById('a'+tr_id).value;
        const NAME = document.getElementById('b'+tr_id).value;
        const BIRTHDAY = null;
        const DEPTNO = document.getElementById('c'+tr_id).value;
        const HOBBY = document.getElementById('d'+tr_id).value;
        const PAY = document.getElementById('e'+tr_id).value;
        const POSITION = document.getElementById('f'+tr_id).value;
        const TYPE = null;
        const TEL = null;
        const PEMPNO = null;
        const serverAddress = apiAddress + tr_id;
        
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
          target.classList.remove('btn_status_green');
          target.classList.add('btn_status_red');
          updateEmp(e);
        }
      }

    return(   
        <div id='e_table_container'>
          <table id='e_info_table'>
            <thead>
              <tr className='table_head'>
                <th className='t_head'><div className="t_div">E_NO</div></th>
                <th className='t_head'><div className="t_div">NAME</div></th>
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
                    <td><input className="user_info_capsule" readOnly id={'c' + data.id} defaultValue = {data.DEPTNO} /></td>
                    <td><input className="user_info_capsule" readOnly id={'d' + data.id} defaultValue = {data.HOBBY} /></td>
                    <td><input className="user_info_capsule" readOnly id={'e' + data.id} defaultValue = {data.PAY} /></td>
                    <td><input className="user_info_capsule" readOnly id={'f' + data.id} defaultValue = {data.POSITION} /></td>
                    <td><div className="user_info_capsule"><button className='edit_btn btn_status_red' id= {'k' + data.id} onClick={empEdit}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 24 24" width="24" height="24"><path d="M14,11h3.105c-.195,.145-.392,.288-.569,.465l-1.535,1.535h-1v-2ZM21,2H3C1.346,2,0,3.346,0,5V22H9v-2H2V5c0-.551,.448-1,1-1H21c.552,0,1,.449,1,1v4.107c.714,.145,1.393,.462,2,.921V5c0-1.654-1.346-3-3-3ZM7,17h2c1.654,0,3-1.346,3-3h-2c0,.551-.448,1-1,1h-2c-.552,0-1-.449-1-1v-1h3v-2h-3v-1c0-.551,.448-1,1-1h2c.552,0,1,.449,1,1h2c0-1.654-1.346-3-3-3h-2c-1.654,0-3,1.346-3,3v1h-1v2h1v1c0,1.654,1.346,3,3,3ZM20,7h-6v2h6v-2Zm3.121,4.879c.566,.566,.879,1.32,.879,2.121s-.313,1.555-.879,2.122l-7.879,7.878h-4.242v-4.243l7.879-7.878c1.17-1.17,3.072-1.17,4.242,0Zm-1.121,2.121c0-.267-.104-.518-.293-.707-.391-.391-1.023-.39-1.414,0l-7.293,7.292v1.415h1.414l7.293-7.293c.189-.189,.293-.44,.293-.707Z"/></svg>
                    </button></div></td>
                  </tr>
              ))}          
            </tbody>
          </table>
        </div>
    );
}

export default Table;