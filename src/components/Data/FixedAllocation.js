import React, { useState } from "react";
import urlData from "../../auth.json";
import { Link } from "react-router-dom";
import "../../styles/DashBoard.css";

export default function FixedAllocation(props) {
  const [cliantId, setcliantId] = useState("");
  const [Segment, setSegment] = useState("");
  const [amount, setamount] = useState(0);

  const handleFixedAllocation = async (e) => {
    e.preventDefault();
    console.log("hello");
    let response = await fetch(
      `${urlData.urlData.url}/v1/update_fixedallowcation`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authToken: sessionStorage.token,
        },
        body: JSON.stringify({
          Client_id: cliantId,
          Segment: Segment,
          amount: amount,
        }),
      }
    );

    let resJson = await response.json();
    console.log("resJson",resJson)
    if (resJson.status == "success") {
      props.alert(resJson.message, "success");
    } else {
      props.alert(resJson.message, "warning");
    }
    props.fetchFixedAllocationData();
  };

  const handleInsertFixedAllocation = async (e) => {
    e.preventDefault();
    console.log("hello");
    let response = await fetch(
      `${urlData.urlData.url}/v1/insert_fixedallowcation`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authToken: sessionStorage.token,
        },
        body: JSON.stringify({
          Client_id: cliantId,
          Segment: Segment,
          amount: amount,
        }),
      }
    );

    let resJson = await response.json();
    console.log("resJson", resJson);
    if (resJson.status == "success") {
      props.alert(resJson.message, "success");
    } else {
      props.alert(resJson.message, "warning");
    }
    props.fetchFixedAllocationData();
  };

  return (
    <section className="dashboard">
      <div className="container mt-3">
        <div className="col-sm-12">
          <div className="card-body col-sm-12 pb-1">
            <h6 className="fw-bold">FixedAllocation</h6>


            <form
              className="row row-cols-lg-auto g-3 align-items-center "
              onSubmit={handleFixedAllocation}
            >
              <div className="col-12">
                <label
                  className="visually-hidden"
                  htmlFor="inlineFormInputGroupUsername"
                >
                  Cliant Id
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Cliant Id"
                    required
                    value={cliantId}
                    onChange={(e) => setcliantId(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12">
                <label
                  className="visually-hidden"
                  htmlFor="inlineFormInputGroupUsername"
                >
                  Exchange-Amount
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Exchange-Amount"
                    name="exchangeAmount"
                    value={amount}
                    onChange={(e) => setamount(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12">
                <label
                  className="visually-hidden"
                  htmlFor="inlineFormSelectPref"
                >
                  Preferred-Segment
                </label>
                <select
                  className="form-select"
                  id="inlineFormSelectPref"
                  onChange={(e) => setSegment(e.target.value)}
                >
                  <option selected>Choose...</option>
                  <option value="NSECM">Equity</option>
                  <option value="NSECD">Commodity</option>
                  <option value="NSEFO">F&O</option>
                </select>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
                <button type="button" className="btn btn-primary ms-3" onClick={handleInsertFixedAllocation}>
                  Insert
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

