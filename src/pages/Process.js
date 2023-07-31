import React from "react";
import { Link } from "react-router-dom";
import "../styles/Process.css";


export default function Process() {
  const linkStyles = {
    fontSize: "20px", // Adjust the value as per your preference
    textDecoration: "none",
    // Optional: Customize link color on hover
    color: "white",
  };

  return (
    <>
      <section className="dashboard">
        <div className="container ">
          <div className=" col-sm-12">
            <div className=" col-sm-12">
              <div className="row ">
                {/* First row */}
                <div className="col-md-4">
                  <Link to="/uploadfile" style={linkStyles}>
                    <div
                      className="card ms-3 mt-3 card-container"
                      style={{ maxWidth: "18rem" }}
                    >
                      <div className="card-body">
                        <h5 className="card-title text-center">BOD</h5>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="#" style={linkStyles}>
                    <div
                      className="card ms-3 mt-3 card-container"
                      style={{ maxWidth: "20rem" }}
                    >
                      <div className="card-body">
                        <h5 className="card-title text-center">In Market</h5>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Second row */}
                <div className="row mt-3">
                  <div className="col-md-4">
                    <Link to="#" style={linkStyles}>
                      <div
                        className="card ms-3 mt-2  mb-4 card-container"
                        style={{ maxWidth: "18rem" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-center">EOD</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="#" style={linkStyles}>
                      <div
                        className="card ms-4 mt-2 mb-3  card-container"
                        style={{ maxWidth: "18rem" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-center">EOD-1</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
