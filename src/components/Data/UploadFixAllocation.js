import React, { useState } from "react";
import urlData from "../../auth.json";
import { useNavigate } from "react-router-dom";
import Loder from "../Features/Loder";

import { Dialog, DialogContent } from "@mui/material";

export default function UploadFixAllocation(props) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const navi = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFiles([...selectedFiles, ...event.target.files]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }

    try {
      setLoading(true);
      setDialogOpen(true);
      const response = await fetch(
        `${urlData.urlData.url}/v1/uploadFileFixedAllowcation`,
        {
          method: "POST",
          headers: {
            authToken: sessionStorage.token,
          },
          body: formData,
        }
      );

      const json = await response.json();
      setLoading(false);
      setDialogOpen(false);
      console.log(json);
      if (json.status === "success") {
        props.alert(json.message, "success");
        navi("/showDataFixAllocation");
      } else {
        console.log("ele");
        props.alert(json.message, "warning");
      }
    } catch (error) {
      setLoading(true);
      setDialogOpen(true);
      // console.error("Error uploading files:", error);
      // props.alert("Error uploading files", "error");
    }
  };

  return (
    <section className="dashboard">
      <div className="container mt-3">
        <div className="col-sm-12">
          <div className="col-sm-12 pb-0">
            <div>
              <table className="table">
                <tbody>
                  <tr className="d-flex">
                    <td>
                      <label>Upload Fix Allocation</label>
                      <span style={{ color: "red" }}> *</span>
                    </td>
                    <td className="flex-fill">
                      <input
                        type="file"
                        name="fixAllocation"
                        className="form-control"
                        accept=".csv"
                        required
                        onChange={handleFileChange}
                      />
                    </td>
                    <td className="flex-fill">
                    {isLoading && (<Loder />) ||
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
                    {/* {isLoading && (
                      <Dialog open={isDialogOpen}>
                        <DialogContent>
                          <Loder />
                         </DialogContent>
                       </Dialog>
                    )} */}
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
