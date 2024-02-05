import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import {Switch} from "antd";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Test from "./pages/Test";

function App() {
    return <BrowserRouter>

        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path='/test' element={<Test/>}/>
        </Routes>

    </BrowserRouter>
}

export default App;
