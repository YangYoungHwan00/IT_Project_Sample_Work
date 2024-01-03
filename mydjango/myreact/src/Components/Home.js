import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import './Style/Home.css';



function Home(){
  const [emp,setEmp] = useState(null);
  let array = [];

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api')
      .then((response) => response.json())
      .then((data) => setEmp(data));
  },[]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    fetch('http://127.0.0.1:8000/api', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        text,
      }),
    })
    
  }

  array = emp;
    return(
      <div id='Home'>
        <nav>
          <Link to='/Another'>main</Link><br/>
        </nav>

        <h1><p>E Manager</p></h1>
        
        { emp&&emp.map((d,index) => (
          <div key={d.id}>{d.id}</div>
        ))}
        {array&&array[3].id}
        
        <form onSubmit={onSubmitHandler}>
          <input name='text' />
          <input type='submit' value='go' />
        </form>
      </div>
    );
  }

export default Home;
