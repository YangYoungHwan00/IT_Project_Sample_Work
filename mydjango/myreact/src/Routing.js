import { BrowserRouter as Switch, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Another from './Components/Another';

function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/another" element={<Another />}></Route>
        </Routes>
    );
}

export default Routing;