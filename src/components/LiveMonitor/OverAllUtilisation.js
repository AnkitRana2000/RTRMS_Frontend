import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

export default function OverAllUtilisation() {
  const [apiResponses, setApiResponses] = useState([]);
  const apiUrl = "http://connect.arhamshare.com:9090/ICCL/FetchAllocation";
  // const apiUrl = ""
  const token = "z8vuwMokZIexL6e3";
  const dataStrings = [
    "CM,6405,OWN",
    "CM,6405,A2196",
    "CM,6405,10001",
    "CM,6405,10006",
    "CM,6405,10024",
    "CM,6405,10515",
    "CM,6405,11502",
    "CM,6405,11507",
    "CM,6405,11514",
  ];

  // Join the data strings with "^" to create the final requestDataString
  const requestDataString = dataStrings.join("^");

  useEffect(() => {
    const fetchMultipleResponses = async () => {
      try {
        const formData = new FormData();
        formData.append("Token", token);
        formData.append("ReqData", requestDataString);

        const response = await fetch(apiUrl, {
          method: "POST",
          body: formData,
        });

        const responseData = await response.json();
        // Split the response data by "^" to get individual data strings
        const dataStrings = responseData.data.split("^");
        console.log("dataStrings", dataStrings);

        // Convert each data string into an object
        const dataObjects = dataStrings.map((dataString, index) => {
          const [
            date,
            Segment,
            cmId,
            memberId,
            clientId,
            accType,
            ccAmount,
            tfSegment,
            Filler1,
            Filler2,
            Filler3,
            Filler4,
            Filler5,
            action,
          ] = dataString.split(",");
          return {
            id: index + 1,
            Date: date,
            Segment: Segment,
            CMId: cmId,
            MemberId: memberId,
            ClientId: clientId,
            AccType: accType,
            CCAmount: ccAmount,
            TFSegment: tfSegment,
            Filler1: Filler1,
            Filler2: Filler2,
            Filler3: Filler3,
            Filler4: Filler4,
            Filler5: Filler5,
            Action: action,
          };
        });

        setApiResponses(dataObjects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchMultipleResponses();
  }, []);

  const columns = [
    { field: "id", headerName: "SR.NO", width: 100, headerClassName: "header" },
    {
      field: "Date",
      headerName: "Current Date",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "Segment",
      headerName: "Segment",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "CMId",
      headerName: "CM Id",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "MemberId",
      headerName: "Member Id",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "ClientId",
      headerName: "Client Id",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "AccType",
      headerName: "AccType",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "CCAmount",
      headerName: "Cash & Cash Equivalents Amount",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "TFSegment",
      headerName: "TRANSFER TO SEGMENT",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "Filler1",
      headerName: "Filler1",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "Filler2",
      headerName: "Filler2",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "Filler3",
      headerName: "Filler3",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "Filler4",
      headerName: "Filler4",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "Filler5",
      headerName: "Filler5",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "Action",
      headerName: "Action",
      width: 120,
      headerClassName: "header",
    },
  ];

  return (
    <section className="dashboard">
      <div className="container">
        <div className="card col-sm-12">
          <div className="card-body col-sm-12">
            <h4 className="mb-3">OverAllUtilisation</h4>
            {/* <div>
              <h1>API Responses for Multiple Clients</h1>
              <pre>{JSON.stringify(apiResponses, null, 2)}</pre>
            </div> */}
            <div className="mt-2">
              <div className="table-responsive">
                <div style={{ height: 500, width: "100%" }}>
                  <Box
                    sx={{
                      width: "100%",
                      "& .header": {
                        backgroundColor: "#eaecee;",
                        fontWeight: 900,
                        fontSize: "18px",
                      },
                    }}
                  >
                    <DataGrid
                      sx={{ margin: "10px", padding: "10px", fontSize: "17px" }}
                      rowHeight={30}
                      columnHeaderHeight={30}
                      rows={apiResponses}
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
