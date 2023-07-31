import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function Alerts(props) {
  const capital=(word)=>{
    // let b=word.toLowerCase()
  return word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase()
    // return cap+b.slice(1);
        
}
  return (
    <div >
      {props.alert && 
        <Stack sx={{ paddingLeft:"50px", width: "100%" }} spacing={2}>
        <Alert severity={props.alert.type}><strong>{capital(props.alert.type)}!! </strong> {props.alert.msg}.</Alert>
        </Stack>}
    </div>
    
  );
}



    