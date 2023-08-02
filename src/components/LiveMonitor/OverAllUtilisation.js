import React, { useEffect, useState } from "react";
import urlData from "../../auth.json";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { DataContext } from "../../APIcontext/APIcontext";
import DataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import NumberFilter from "@inovua/reactdatagrid-community/NumberFilter";
import StringFilter from "@inovua/reactdatagrid-community/StringFilter";



export default function OverAllUtilisation() {
  
  const {apiResponses,fetchOverAllUtilisation}= useContext(DataContext)

  const filterColumns = [{ name: "clientId", type: "string", operator: "eq" }];


  const columns = [
    { name: "id", header: "SR.NO",type:"number" },
    {
      name: "clientId",
      header: "ClientId",
      type: "string",
      filterEditor: StringFilter,
      
    },
    {
      name: "total_margin",
      header: "Total Margin",
      type: "number",
      filterEditor: NumberFilter,
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      name: "total",
      header: "Total",
      type: "number",
      filterEditor: NumberFilter,
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      name: "percentage",
      header: "Percentage",
      type: "number",
      filterEditor: NumberFilter,
      renderCell: (params) =>params.value== null ? "-":params.value.toFixed(2),
    }, 
    {
      name: "fo_margin",
      header: "FOMargin",
      type: "number",
      filterEditor: NumberFilter,
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      name: "fo_col",
      header: "FOCol",
      type: "number",
      filterEditor: NumberFilter,
      renderCell: (params) => params.value.toFixed(2),
    },

    {
      name: "fo_allocation",
      header: "FOAllocation",
      type: "number",
      filterEditor: NumberFilter,
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      name: "fo_total",
      header: "FOTotal",
      type: "number",
      filterEditor: NumberFilter,
      renderCell: (params) => params.value.toFixed(2),
    },

    {
      name: "cm_margin",
      header: "CMMargin",
      type: "number",
      filterEditor: NumberFilter,
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      name: "cm_col",
      header: "CMCol",
      type: "number",
      filterEditor: NumberFilter,
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      name: "cm_allocation",
      header: "CMAllocation",
      type: "number",
      filterEditor: NumberFilter,
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      name: "cm_total",
      header: "CMTotal",
      type: "number",
      filterEditor: NumberFilter,
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      name: "cd_margin",
      header: "CDMargin",
      type: "number",
      filterEditor: NumberFilter,
      renderCell: (params) => params.value.toFixed(2),
    },

    {
      name: "cd_col",
      header: "CDCol",
      type: "number",
      filterEditor: NumberFilter,
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      name: "cd_allocation",
      header: "CDAllocation",
      type: "number",
      filterEditor: NumberFilter,
      renderCell: (params) => params.value.toFixed(2),
    },
    {
      name: "cd_total",
      header: "CDTotal",
      type: "number",
      filterEditor: NumberFilter,
      renderCell: (params) => params.value.toFixed(2),
    },
  ];

  useEffect(() => {
    
    const interval = setInterval(fetchOverAllUtilisation, 60000);
    return () => {
      clearInterval(interval);
    };
    });
    const gridStyle = { minHeight: 700 };
  return (
    <section className="dashboard">
      <div className="container">
        <div className=" col-sm-12">
          <div className=" col-sm-12">
            <h4 className="mb-3">OverAllUtilisation</h4>
            {/* <div>
              <h1>API Responses for Multiple Clients</h1>
              <pre>{JSON.stringify(apiResponses, null, 2)}</pre>
            </div> */}
            <div className="mt-2">
              <div className="table-responsive">
                <div style={{ height: 600, width: "100%" }}>
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
                      dataSource={apiResponses}
                      columns={columns}
                      


                      
                      idProperty="id"
                      pagination
                      defaultLimit={50}
                      columnMinWidth={80}
                      style={gridStyle}
                      defaultFilterValue={filterColumns}
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
