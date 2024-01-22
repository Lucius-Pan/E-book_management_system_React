import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import {Switch} from "antd";
import Home from "./pages/Home";

function App() {
    return <BrowserRouter>

        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>

    </BrowserRouter>
}

export default App;
