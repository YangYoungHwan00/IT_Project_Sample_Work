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
            <div id='modal_container' className='modal_container d_none'> 
          <div id='menu'>
            <nav id='link'>
              <Link to='/register'>e register</Link>
            </nav>
          </div> 
        </div>
        <button id='menu_btn' onClick={menuModal}>menu</button><br />
        </div>
    );
}

export default Menu;