import {Link} from 'react-router-dom'

function Register(){
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

        function clearAllInputs(e){
        var allInputs = document.querySelectorAll('.e_info_input');
        allInputs.forEach(singleInput => singleInput.value = '');
        } 

        fetch('http://127.0.0.1:8000/emp', {
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
    return(
        <div>
            <nav>
                <Link to='/'>back</Link>
            </nav>
            <form id='e_info_input_form' name='e_info' onSubmit={onSubmitHandler}>
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
        </div>
    );
}

export default Register;