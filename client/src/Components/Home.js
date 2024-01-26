import { Link } from 'react-router-dom';
import './Style/Home.css';
import Table from './Table';
import Menu from './Menu';
import Delete from './Delete'

function Home(){ 

    return(
      <div id='Home'>
        <div className='header'>
          <Link to='/'><p className='title'>E Manager</p></Link>
        </div>
        <Menu />
        <div id='table_component_container'>
          <Table />
        </div>    
        <div id='del_btn_div'>
          <Delete />   
        </div>    
      </div>
    );
  }

export default Home;
