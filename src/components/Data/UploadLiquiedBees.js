import React from "react";
import { useState } from "react";
import urlData from "../../auth.json";
import "../../styles/DashBoard.css";
import Loder from "../Features/Loder";

export default function UploadLiquiedBees(props) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [count, setCount] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFiles([...selectedFiles, ...event.target.files]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }
    console.log("for", formData);

    try {
      setCount(true);
      const response = await fetch(
        `${urlData.urlData.url}/v1/uploadfileliquidbees`,
        {
          method: "POST",
          headers: {
            authToken: sessionStorage.token,
          },
          body: formData,
        }
      );

      // Handle the response if needed
      console.log(response);
      setCount(false);
      const json = await response.json();
      if ((json.status = "success")) {
        props.alert(json.message, "success");
      } else {
        props.alert(json.message, "warning");
      }
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <section className="dashboard">
      <div className="container mt-3">
        <div className=" col-sm-12">
          <div className="card-body col-sm-12  pb-0">
            <div>
              <table className="table">
                <tbody>
                  <tr className="d-flex">
                    <td >
                      <label>Upload Fix Allocation</label>
                      <span style={{ color: "red" }}> *</span>
                    </td>
                    <td className="flex-fill">
                      <input
                        type="file"
                        name="liquiedbees"
                        id="liquiedbees"
                        className="form-control"
                        accept=".csv"
                        required
                        onChange={handleFileChange}
                      />
                    </td>
                    <td className="flex-fill">
                      {count && (<Loder />) ||
                      <button
                        id="submit-button"
                        className="btn btn-dark"
                        type="submit"
                        value="Upload-Files"
                        onClick={handleUpload}
                      >
                        Submit
                      </button>
                      }
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
