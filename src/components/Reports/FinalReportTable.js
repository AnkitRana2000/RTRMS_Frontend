import React, { useEffect, useState } from "react";
import urlData from "../../auth.json";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import "../../styles/DashBoard.css";
import { saveAs } from "file-saver";

export default function FinalReportTable(props) {
  const [ReportsData, setReportsData] = useState([]);

  //Final Report Data API
  const fetchFinalReportData = async () => {
    try {
      let response = await fetch(`${urlData.urlData.url}/v1/getData`, {
        method: "GET",
        headers: {
          authToken: sessionStorage.token,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch ReportsData ");
      }
      const data = await response.json();
      const ReportsData = data.data.map((data, index) => ({
        ...data,
        id: index + 1,
      }));
      setReportsData(ReportsData);
      console.log("ReportsData", ReportsData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchFinalReportData();
  }, []);

  //Report CSV Generate API

  const handleDownloadCsv = async () => {
    try {
      const response = await fetch(`${urlData.urlData.url}/v1/downloadCSV`, {
        method: "GET",
        headers: {
          authToken: sessionStorage.token,
        },
      });
      console.log("response", response);
      if (response.ok) {
        props.alert("Successfully Download ZipFile", "success");
      } else {
        props.alert(response.message, "warning");
      }

      if (!response.ok) {
        throw new Error("Failed to fetch ZIP file");
      }

      // Get the ZIP data from the response as an ArrayBuffer
      const zipData = await response.arrayBuffer();

      // Create a Blob from the ZIP data
      const zipBlob = new Blob([zipData], { type: "application/zip" });
      // Get the current date in the format DDMMYYYY
      const currentDate = new Date()
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .replace(/\//g, ""); // Remove slashes from the date
      // Create a file from the Blob
      const file = new File([zipBlob], `ICCLCOLL_${currentDate}_.zip`, {
        type: "application/zip",
      });

      // You can now perform any desired operations with the 'file' object
      // For example, if you want to trigger a download, you can use the FileSaver API:
      saveAs(file, `ICCLCOLL_${currentDate}_.zip`); // Assuming you have the FileSaver library

      // Clean up the temporary URL for the ZIP Blob (if needed, not necessary for file usage)
      URL.revokeObjectURL(zipBlob);
    } catch (error) {
      console.error("Error downloading ZIP file:", error);
    }
  };

  const columns = [
    { field: "id", headerName: "SR.No", width: 100, headerClassName: "header" },

    {
      field: "AccountCode",
      headerName: "AccountCode",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "Funded_Amount",
      headerName: "Funded_Amount",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "Allocation_Cash",
      headerName: "Allocation_Cash",
      width: 120,
      headerClassName: "header",
      align: "right",
      renderCell: (params) => params.value.toFixed(2),
    },

    {
      field: "CM_COL",
      headerName: "CM_COL",
      width: 120,
      headerClassName: "header",
      align: "right",
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      field: "Total_cash",
      headerName: "Total_cash",
      width: 120,
      headerClassName: "header",
      align: "right",
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      field: "CM_MARGIN",
      headerName: "CM_MARGIN",
      width: 120,
      headerClassName: "header",
      align: "right",
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      field: "Allocation_FO",
      headerName: "Allocation_FO",
      width: 120,
      headerClassName: "header",
      align: "right",
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      field: "FO_COL",
      headerName: "FO_COL",
      width: 120,
      headerClassName: "header",
      align: "right",
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      field: "Total_FO",
      headerName: "Total_FO",
      width: 120,
      headerClassName: "header",
      align: "right",
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      field: "FO_MARGIN",
      headerName: "FO_MARGIN",
      width: 120,
      headerClassName: "header",
      align: "right",
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      field: "final_cd_allocation",
      headerName: "final_cd_allocation",
      width: 120,
      headerClassName: "header",
      align: "right",
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      field: "CD_COL",
      headerName: "CD_COL",
      width: 120,
      headerClassName: "header",
      align: "right",
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      field: "Total_CD",
      headerName: "Total_CD",
      width: 120,
      headerClassName: "header",
      align: "right",
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      field: "CD_MARGIN",
      headerName: "CD_MARGIN",
      width: 120,
      headerClassName: "header",
      align: "right",
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      field: "Total_Allocation",
      headerName: "Total_Allocation",
      width: 120,
      headerClassName: "header",
      align: "right",
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      field: "Total_Margin",
      headerName: "Total_Margin",
      width: 120,
      headerClassName: "header",
      align: "right",
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      field: "NET",
      headerName: "NET",
      width: 120,
      headerClassName: "header",
      align: "right",
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      field: "NET_BALANCE",
      headerName: "NET_BALANCE",
      width: 120,
      headerClassName: "header",
      align: "right",
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      field: "DebitBalance",
      headerName: "DebitBalance",
      width: 120,
      headerClassName: "header",
      align: "right",

      renderCell: (params) => params.value.toFixed(2),
    },
    {
      field: "CreditBalance",
      headerName: "CreditBalance",
      width: 120,
      headerClassName: "header",
      align: "right",
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      field: "liq_bees_AMT",
      headerName: "liq_bees_AMT",
      width: 120,
      headerClassName: "header",
      align: "right",
      renderCell: (params) => params.value.toFixed(2),
    },
  ];

  return (
    <section className="dashboard ">
      <div className="container ">
        <div className="card col-sm-12">
          <div className="card-body col-sm-12">
            <div>
              <h4>FinalReportTable</h4>
            </div>

            <button
              className="btn btn-outline-secondary  "
              onClick={handleDownloadCsv}
            >
              Download Coll File
            </button>

            <div className="mt-2">
              <div className="table-responsive">
                <div style={{ height: 550, width: "100%" }}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      "& .header": {
                        backgroundColor: "lightgray",
                        alignItems: "center",
                      },
                    }}
                  >
                    <DataGrid
                      sx={{ margin: 0, padding: 1, fontSize: "12px" }}
                      rowHeight={22}
                      columnHeaderHeight={30}
                      rows={ReportsData}
                      columns={columns}
                      slots={{
                        toolbar: GridToolbar,
                      }}
                    />
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
