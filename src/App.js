import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResSideBar from "./components/ResSideBar";
import Alerts from "./components/Features/Alerts";
import { useState } from "react";
import Login from "./components/Features/Login"




function App() {
  const [alert, setAlert] = useState(null);
  const showalert = (msg, type) => {
    setAlert({ msg: msg, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };
  return (
    <>
      <BrowserRouter>
      {sessionStorage.token && (
        <div>
          <NavBar alert={showalert} alert1={alert} />
          <div>
            <ResSideBar alert={showalert}/>
          </div>
        </div>)}
        <Routes>
          <Route path="/" element={<Login alert={showalert} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
