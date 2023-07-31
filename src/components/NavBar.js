import React from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import Alerts from "./Features/Alerts";
import "../styles//NavBar.css"

export default function NavBar(props) {
  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    props.alert("Logged Out", "success");
    navigate("/");
  };
  const navigate = useNavigate();
  return (
    <>
      <nav
        className="navbar  navbar-expand-lg  fixed-top"
        style={{ backgroundColor: "white" }}
      >
        <div className="container-fluid justify-content-between">
          {/* <button className="navbar-toggler " type="button">
            <span className="navbar-toggler-icon " />
          </button> */}
          <Link className="navbar-brand ms-2 font-weight-bold" style={{color:"#ffff"}} to={"#"}>
            RTRMS
          </Link>
          <div className="">
            <Alerts alert={props.alert1} />
          </div>
          <ul className="navbar-nav">
            

            <li>
              <Link
                className="nav-link"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Stack direction="row">
                  <Avatar
                     src="/broken-image.jpg"
                  >
                    
                  </Avatar>
                </Stack>
              </Link>

              <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end mr-2 ">
                <li>
                  <Link
                    to="/"
                    className="dropdown-item text-center"
                    onClick={logout}
                  >
                    <i class="fa-solid fa-right-from-bracket"></i>
                    <span className="ms-2">LogOut</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
