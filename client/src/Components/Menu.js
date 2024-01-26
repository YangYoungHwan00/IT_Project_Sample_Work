import './Style/Menu.css';
import { Link } from 'react-router-dom';

function Menu(){

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
        <div>
          <div id='modal_container' className='modal_container'> 
            <div id='menu'>
              <div id='menu_contents'>
              <nav id='links'>
                <Link to='/register' id='link'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="50" height="70"><path d="M23,11H21V9a1,1,0,0,0-2,0v2H17a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V13h2a1,1,0,0,0,0-2Z"/><path d="M9,12A6,6,0,1,0,3,6,6.006,6.006,0,0,0,9,12ZM9,2A4,4,0,1,1,5,6,4,4,0,0,1,9,2Z"/><path d="M9,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,9,14Z"/></svg>
                    <span className='icon_content'>Register</span>
                  </span></Link>
              </nav>
              </div>
            </div>
          </div>
          <button id='menu_btn' onClick={menuModal}>menu</button><br />
          
        </div>
    );
}

export default Menu;