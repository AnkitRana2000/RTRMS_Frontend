import React from "react";
import { Link } from "react-router-dom";
import "../styles/Data.css"

export default function Data() {
  return (
    <section className="data">
      <div className="container">
        <div className=" col-sm-12">
          <div className=" col-sm-12">
            <div>
              <h3 >Data</h3>
            </div>

            <div className="mt-3">
              <table className="table">
                <tbody>
                  <tr >
                    <td>
                      <label >Fixed-Allocation:</label>
                    </td>
                    <td>
                      <Link
                        to="/showDataFixAllocation"
                        className="btn btn-secondary"
                      >
                        Fixed-Allocation
                      </Link>
                    </td>
                  </tr>

                  <tr >
                    <td>
                      <label>Show Data Liquid Bees:</label>
                    </td>
                    <td>
                      <Link to="/showDataLiquidBees" className="btn btn-secondary">
                        Show Data Liquid Bees
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
  /* <tr className="table-secondary">
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
