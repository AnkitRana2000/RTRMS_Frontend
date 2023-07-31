import React, { useEffect, useState } from "react";
import urlData from "../../auth.json";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import "../../styles/Process.css";

import FixedAllocation from "./FixedAllocation";
import UploadFixAllocation from "./UploadFixAllocation";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

export default function ShowDataFixAllocation(props) {
  const [FixedAllocationData, setFixedAllocationData] = useState([]);
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleDeleteConfirmation = (params) => {
    setSelectedRow(params.row);
    setOpenConfirmationDialog(true);
  };

  const handleDeleteCancel = () => {
    setOpenConfirmationDialog(false);
  };

  const handleDeleteConfirm = () => {
    setOpenConfirmationDialog(false);
    deleteEntry(selectedRow);
  };

  const fetchFixedAllocationData = async () => {
    try {
      let response = await fetch(
        `${urlData.urlData.url}/v1/getFixedAllocationData`,
        {
          method: "GET",
          headers: {
            authToken: sessionStorage.token,
          },
        }
      );
      console.log(response)
      if (!response.ok) {
        throw new Error("Failed to fetch ReportsData ");
      }
      const data = await response.json();
      const FixedAllocationData = data.data.map((data, index) => ({
        ...data,
        id: index + 1,
      }));
      setFixedAllocationData(FixedAllocationData);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFixedAllocationData();
  }, []);

  const deleteEntry = async (params) => {
    let client_id = selectedRow.Client_id
    console.log(client_id)
    let response = await fetch(
      `${urlData.urlData.url}/v1/delete_fixedallowcation/${client_id}`,
      {
        method: "POST",
        headers: {
          authToken: sessionStorage.token,
        },
      }
    );
    let resJson = await response.json();
    console.log(resJson);
    if ((resJson.status = "success")) {
      props.alert(resJson.message, "success");
    } else {
      props.alert(resJson.message, "warning");
    }
    fetchFixedAllocationData();
  };

  const columns = [
    { field: "id", headerName: "SNo", flex: 1 },
    { field: "Client_id", headerName: "Client_id", flex: 1 },
    { field: "Segment", headerName: "Segment", flex: 1 },
    { field: "amount", headerName: "Amount", flex: 1 },
    {
      field: "Delete",
      headerName: "Delete",
      renderCell: (params) => {
        return (
          <Button onClick={() => handleDeleteConfirmation(params)}>
            <i className="fa-solid fa-trash"></i>
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <section className="dashboard" >
        <div className="container ">
          <div className="card col-sm-12">
            <div className="card-body col-sm-12 ">
              <div>
                <h4>Show Data Fix Allocation</h4>
              </div>

              <div className="mt-2">
                <div className="table-responsive">
                  <div style={{ height: 450, width: "100%" }}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      "& .header": {
                        backgroundColor: "lightgray",
                        alignItems:"center" 
                      },
                    }}
                  >
                      <DataGrid
                        sx={{
                          margin: "10px",
                          padding: "10px",
                          fontSize: "15px",
                        }}
                        rowHeight={30}
                        columnHeaderHeight={30}
                        rows={FixedAllocationData}
                        columns={columns}
                        
                      />
                    </Box>


                    <Dialog
                      open={openConfirmationDialog}
                      onClose={handleDeleteCancel}
                    >
                      <DialogTitle>Delete Entry</DialogTitle>
                      <DialogContent>
                        Are you sure you want to delete {selectedRow?selectedRow.Client_id:""} Client?
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleDeleteCancel} color="primary">
                          Cancel
                        </Button>
                        <Button
                          onClick={handleDeleteConfirm}
                          color="primary"
                          autoFocus
                        >
                          Confirm
                        </Button>


                      </DialogActions>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <UploadFixAllocation alert={props.alert} />
      <FixedAllocation
        alert={props.alert}
        fetchFixedAllocationData={fetchFixedAllocationData}
      />
    </>
  );
}
