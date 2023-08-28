import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import { render } from "react-dom";
import {
  BrowserRouter,
  // BrowserRouter as Router,
  Routes,
  Route
  // Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //state variable which shows whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); //alert is an object here and showAlert is a method

  const showAlert = (message, type) => {
    //type is a type of alert message
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeBodyClasses = () =>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled!", "success");
      // document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="about" element={<About mode={mode}/>} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>} />
          </Routes>
                 
          {/* <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/> */}
          {/* <About/> */}
        </div>
      </BrowserRouter>
      
    </>
  );
}

export default App;
