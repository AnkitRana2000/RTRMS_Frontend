import React from "react";
import { createContext } from "react";
import { useState } from "react";
import urlData from "../auth.json";
import { useEffect } from "react";

export const DataContext = createContext();
export default function APIcontext(props) {
  const [apiResponses, setApiResponses] = useState([]);

  const fetchOverAllUtilisation = async () => {
    try {
      let response = await fetch(
        `${urlData.urlData.url}/v1/getOverallUtilisationData`,
        {
          method: "POST",
          headers: {
            authToken: sessionStorage.token,
          },
        }
      );
      console.log("response",response)
      if (!response.ok) {
        throw new Error("Failed to fetch ReportsData ");
      }
      const data = await response.json();
      const ReportsData = data.data.map((data, index) => ({
        ...data,
        id: index + 1,
      }));
      setApiResponses(ReportsData);
      console.log("ReportsData", ReportsData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchOverAllUtilisation();
  }, []);
  useEffect(()=>{
    console.log("apiResponses",apiResponses)
  },[apiResponses])
  return (
    <DataContext.Provider value={{ apiResponses, fetchOverAllUtilisation }}>
      {props.children}
    </DataContext.Provider>
  );
}
