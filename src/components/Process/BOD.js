import React from "react";
import { Link } from "react-router-dom";
import "../../styles/DashBoard.css";

export default function BOD() {
  return (
    <section className="dashboard">
      <div className="container">
        <div className="card col-sm-12">
          <div className="card-body col-sm-12">
            <div>
              <h4>BOD</h4>
            </div>

            <div className="mt-5">
              <table className="table">
                <tbody>
                  <tr className="table-primary">
                    <td>
                      <label>Upload Files:</label>
                    </td>
                    <td>
                      <Link to="/uploadfile" className="btn btn-primary">
                        Upload Files
                      </Link>
                    </td>
                  </tr>

                  <tr className="table-success">
                    <td>
                      <label>Process File:</label>
                    </td>
                    <td>
                      <a className="btn btn-success">Process File</a>
                    </td>
                  </tr>

                  <tr className="table-warning">
                    <td>
                      <label>Preferred-Segment:</label>
                    </td>
                    <td>
                      <Link to="/preferredSegment" className="btn btn-warning">
                        Preferred-Segment
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <tr className="table-info">
                      <td>
                        <label>Fixed-Allocation:</label>
                      </td>
                      <td>
                        <Link to="/fixedallocation" className="btn btn-info">
                          Fixed-Allocation
                        </Link>
                      </td>
                    </tr>
                    <tr className="table-danger">
                    <td>
                      <label>Upload Liquid Bees:</label>
                    </td>
                    <td>
                      <Link
                        to="/uploadLiquiedBees"
                        className="btn btn-danger"
                      >
                        Upload Liquid Bees
                      </Link>
                    </td>
                  </tr>

                  <tr className="table-secondary">
                    <td>
                      <label>
                        Upload Fixed-Allocation & Preferred-Segment:
                      </label>
                    </td>
                    <td>
                      <Link
                        to="/uploadFixAndPref"
                        className="btn btn-secondary"
                      >
                        Upload Fixed-Allocation & Preferred-Segment
                      </Link>
                    </td>
                  </tr> */
}
