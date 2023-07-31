import React from "react";
import { useState } from "react";
import urlData from "../../auth.json";
import { useNavigate } from "react-router-dom";
import "../../styles/DashBoard.css";
import Loder from "../Features/Loder";

export default function UploadFile(props) {
  const [message, setMessage] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [count, setCount] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFiles([...selectedFiles, ...event.target.files]);
  };

  const handleUpload = async (e) => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }
    console.log("formData", formData);

    try {
      // e.preventDefault();
      setCount(true);
      const response = await fetch(`${urlData.urlData.url}/v1/uploadFile/`, {
        method: "POST",
        headers: {
          authToken: sessionStorage.token,
        },
        body: formData,
      });

      // Handle the response if needed

      const json = await response.json();
      console.log(json);
      setCount(false);
      if (json.status == "success") {
        props.alert(json.message, "success");
        // window.location.reload(true);
        setSelectedFiles([]);
      } else {
        props.alert(json.message, "warning");
        // window.location.reload(true);
      }
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <section className="dashboard">
      <div className="container">
        <div className=" col-sm-12">
          <div className=" col-sm-12">
            <h3>UploadFile</h3>

            <div className="message">
              <p>{message}</p>
            </div>

            <div className="mt-3">
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <label>Upload RTRMS_FO</label>
                      <span style={{ color: "red" }}> *</span>
                    </td>
                    <td>
                      <input
                        type="file"
                        name="rtrms_fo"
                        accept=".csv"
                        required
                        onChange={handleFileChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Upload RTRMS_CM</label>
                      <span style={{ color: "red" }}> *</span>
                    </td>
                    <td>
                      <input
                        type="file"
                        name="rtrms_cm"
                        accept=".csv"
                        required
                        onChange={handleFileChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Upload RTRMS_CD</label>
                      <span style={{ color: "red" }}> *</span>
                    </td>
                    <td>
                      <input
                        type="file"
                        name="rtrms_cd"
                        accept=".csv"
                        required
                        onChange={handleFileChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Upload Trail Balance</label>
                      <span style={{ color: "red" }}> *</span>
                    </td>
                    <td>
                      <input
                        type="file"
                        name="trial_balance"
                        accept=".xls"
                        required
                        onChange={handleFileChange}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              {count && <Loder />}
              <button
                id="submit-button"
                className="btn btn-dark my-4"
                type="submit" // Change the type to "button" to prevent form submission
                onClick={handleUpload}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import React, { useState } from 'react';

// const FileUploadForm = () => {
//   const [selectedFiles, setSelectedFiles] = useState([]);

//   const handleFileChange = (event) => {
//     setSelectedFiles(event.target.files);
//   };

//   const handleUpload = async () => {
//     const formData = new FormData();
//     for (let i = 0; i < selectedFiles.length; i++) {
//       formData.append('files', selectedFiles[i]);
//     }

//     try {
//       const response = await fetch('/api/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       // Handle the response if needed
//       console.log(response);
//     } catch (error) {
//       console.error('Error uploading files:', error);
//     }
//   };

//   return (
//     <div>
//       <input type="file" multiple onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload Files</button>
//     </div>
//   );
// };

// export default FileUploadForm;
