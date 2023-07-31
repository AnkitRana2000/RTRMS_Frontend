import React, { useState } from "react";
import urlData from "../../auth.json";

export default function LiquiedBees(props) {
  const [cliantId, setcliantId] = useState("");
  const [Liquid_Bees, setLiquid_Bees] = useState("");

  const handleLiquiedBees = async (e) => {
    e.preventDefault();
    console.log("hello");
    let response = await fetch(`${urlData.urlData.url}/v1/update_liquidbees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authToken: sessionStorage.token,
      },
      body: JSON.stringify({
        Client_id: cliantId,
        Liquid_Bees: Liquid_Bees,
      }),
    });

    let resJson = await response.json();
    console.log(resJson);
    if (resJson.status == "success") {
      props.alert(resJson.message, "success");
      props.fetchLiquidBeesData()
    } else {
      props.alert(resJson.message, "warning");
    }
    
  };

  const handleInsertLiquiedBees = async (e) => {
    e.preventDefault();
    console.log("hello");
    let response = await fetch(`${urlData.urlData.url}/v1/insert_liquidbees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authToken: sessionStorage.token,
      },
      body: JSON.stringify({
        Client_id: cliantId,
        Liquid_Bees: Liquid_Bees,
      }),
    });

    let resJson = await response.json();
    console.log(resJson);
    if (resJson.status == "success") {
      props.alert(resJson.message, "success");
      props.fetchLiquidBeesData()
    } else {
      props.alert(resJson.message, "warning");
    }

  };

  return (
    <section className="dashboard">
      <div className="container mt-3">
        <div className=" col-sm-12">
          <div className="card-body col-sm-12 pb-0 ">
          <h6 className="fw-bold">LiquiedBees</h6>

            <form
              className="row row-cols-lg-auto g-3 align-items-center "
              onSubmit={handleLiquiedBees}
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
                    value={Liquid_Bees}
                    onChange={(e) => setLiquid_Bees(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-primary ms-3"
                  onClick={handleInsertLiquiedBees}
                >
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
