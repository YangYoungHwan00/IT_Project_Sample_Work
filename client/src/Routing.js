import { BrowserRouter as Switch, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';

function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
        </Routes>
    );
}

export default Routing;