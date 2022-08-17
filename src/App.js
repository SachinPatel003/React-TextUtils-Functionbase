import './App.css';
import { Navbar } from "./Components/Navbar"
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import { Alert } from './Components/Alert';
import { About } from './Components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState()

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert()
    }, 1500);
  }


  function toggleMode() {
    if (mode === "light") {
      setMode("dark")
      document.body.style.background = "#071703"
      document.title = "TextUtiles - darkMode"
      showAlert("Darkmode Enable", "success")
    } else {
      setMode("light")
      document.body.style.background = "white"
      document.title = "TextUtiles - LightMode"
      showAlert("Lightmode Enable", "success")
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar Title="DEMO App" toggleMode={toggleMode} Home="iHome" mode={mode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={ <TextForm mode={mode} showAlert={showAlert} />} /> 
          <Route path="/about" element={<About mode={mode} />} /> 
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
