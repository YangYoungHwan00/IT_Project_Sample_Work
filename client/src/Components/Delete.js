import './Style/Delete.css'
import React from 'react';

function Delete(){
    
    const api_url = 'http://127.0.0.1:8000/emp/id=';

    async function DelBtnHandler(){
        let selected = null;
        selected = document.querySelectorAll('.btn_status_green')
        if(selected.length == 0)
        {
            window.alert('Click edit buttons first to delete');
        }
        else{
            for(var i=0; i<selected.length; i++){
                await fetch(api_url + selected[i].id.slice(1),{
                    method: 'DELETE',
                });
            }
            console.log(selected);
            window.location.reload();
        }
    }

    return(
        
        <button id='deleteData' onClick={DelBtnHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill="white" data-name="Layer 1" viewBox="0 0 24 24" width="40" height="50"><path d="M17,4V2a2,2,0,0,0-2-2H9A2,2,0,0,0,7,2V4H2V6H4V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V6h2V4ZM11,17H9V11h2Zm4,0H13V11h2ZM15,4H9V2h6Z"/></svg>
        </button>
        

    );
}

export default Delete;