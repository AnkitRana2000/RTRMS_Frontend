import React, { useState } from "react";
import "../styles/SideBar.css"; // Make sure to import the CSS file
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "../components/DashBoard/DashBoard";
import ShowDataFixAllocation from "../components/Data/ShowDataFixAllocation";
import ShowDataLiquidBees from "../components/Data/ShowDataLiquidBees";
import UploadFile from "../components/Process/UploadFile";
import FinalReportTable from "../components/Reports/FinalReportTable";
import OverAllUtilisation from "../components/LiveMonitor/OverAllUtilisation";

import BOD from "../components/Process/BOD";
import Data from "../pages/Data";
import Process from "../pages/Process";
import Reports from "../pages/Reports";
import LiveMonitor from "../pages/LiveMonitor";

export default function ResSideBar(props) {
  const [mini, setMini] = useState(true);

  const toggleSidebar = () => {
    if (mini) {
      // console.log("opening sidebar");
      document.getElementById("mySidebar").style.width = "200px";
      document.getElementById("main").style.marginLeft = "200px";
      setMini(false);
    } else {
      // console.log("closing sidebar");
      document.getElementById("mySidebar").style.width = "65px";
      document.getElementById("main").style.marginLeft = "60px";
      setMini(true);
    }
  };

  return (
    <>
      <div
        id="mySidebar"
        className={`sidebar ${mini ? "open" : ""}`}
        onMouseEnter={toggleSidebar}
        onMouseLeave={toggleSidebar}
      >
        <div className="mt-5 ">
          <Link
            to="/dashboard"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Dashboard"
          >
            <span>
              <i className="fa-solid fa-house fa-lg "></i>
              <span className="icon-text">
               &nbsp;&nbsp;&nbsp;Dashboard
              </span>
            </span>
          </Link>
          <br />
          <Link
            to="/data"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Data"
          >
            <span>
              <i className="fa-solid fa-database fa-xl"></i>
              <span className="icon-text">&nbsp;&nbsp;&nbsp;&nbsp;Data</span>
            </span>
          </Link>
          <br />
          <Link
            to="/process"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Data"
          >
            <span>
              <i className="fa-solid fa-person-running fa-xl"></i>
              <span className="icon-text">&nbsp;&nbsp;&nbsp;&nbsp;Process</span>
            </span>
          </Link>
          <br />
          <Link
            to="/reports"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Reports"
          >
            <span>
              <i className="fa-regular fa-calendar-days fa-xl" />
              <span className="icon-text">&nbsp;&nbsp;&nbsp;&nbsp;Report</span>
            </span>
          </Link>
          <br />
          <Link
            to="/liveMonitor"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Live Monitor"
          >
            <span>
              <i className="fa-solid fa-desktop fa-lg"></i>
              <span className="icon-text">&nbsp;&nbsp;&nbsp;LiveMonitor</span>
            </span>
          </Link>
{/* <br/>
          <Link
            to="/"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="LogOut"
          >
            <span className="fixed-bottom">
              <i class="fa-solid fa-right-from-bracket fa-xl"></i>
              <span className="icon-text">&nbsp;&nbsp;&nbsp;LogOut</span>
            </span>
          </Link> */}
        </div>
      </div>

      <div id="main">
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/data" element={<Data />} />
          <Route path="/process" element={<Process />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/liveMonitor" element={<LiveMonitor />} />
          <Route
            path="/showDataFixAllocation"
            element={<ShowDataFixAllocation alert={props.alert} />}
          />
          <Route
            path="/showDataLiquidBees"
            element={<ShowDataLiquidBees alert={props.alert} />}
          />
          <Route path="/bod" element={<BOD />} />
          <Route
            path="/uploadfile"
            element={<UploadFile alert={props.alert} />}
          />
          <Route
            path="/finalreport"
            element={<FinalReportTable alert={props.alert} />}
          />
          <Route path="/overAllUtilisation" element={<OverAllUtilisation />} />
        </Routes>
      </div>
    </>
  );
}
