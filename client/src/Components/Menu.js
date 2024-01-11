import './Style/Menu.css';
import { Link } from 'react-router-dom';
import { PersonAddOutline } from 'react-ionicons'

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
              <nav id='links'>
                <Link to='/register' id='link'>
                  <span><PersonAddOutline
                    color={'black'} 
                    height="50px"
                    width="70px"
                  />
                  <span className='icon_content'>goodddddfdfdffdfdf</span>
                  </span></Link>
              </nav>
            </div>
          </div>
          <button id='menu_btn' onClick={menuModal}>menu</button><br />
          
        </div>
    );
}

export default Menu;