import { Link } from 'react-router-dom';
import React from 'react';
import './Style/Home.css';

function Home(){
    return(
      <div id='Home'>
        <nav>
          <Link to='/Another'>main</Link><br/>
        </nav>

        <h1><p>E Manager</p></h1>
      </div>
    );
  }

export default Home;
