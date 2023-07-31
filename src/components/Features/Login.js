import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import urlData from "../../auth.json";
import LoginBackGround from "../../assets/image/LoginBackground.png";

const divStyle = {
  position: "relative",
  backgroundImage: `url(${LoginBackGround})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
const cardStyle = {
  width: "100%",
  maxWidth: "400px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 2000); // 2 seconds in milliseconds

      return () => {
        clearTimeout(timer);
      };
    }
  }, [message]);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("hello");
    let response = await fetch(`${urlData.urlData.url}/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: userName,
        password: password,
      }),
    });

    let resJson = await response.json();
    console.log(resJson);
    if (resJson.status === "success") {
      setMessage(resJson.message);
      sessionStorage.setItem("token", resJson.data["access_token"]);
      navigate("/dashboard");
      props.alert("Logged In", "success");
      console.log(sessionStorage.token);
    } else if (resJson.status === "Error") {
      setMessage(resJson.message);
      navigate("/");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={divStyle}
    >
      <div className="card  shadow p-4 " style={cardStyle}>
        <form onSubmit={handleLogin} className="mt-3 mb-3 w-100 ">
          <h1 className="text-center mb-3">Log In</h1>

          <div className="message">
            <p className="text-danger">{message}</p>
          </div>

          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>

            <div class="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span class="input-group-text">
                <i
                  className={`fa-solid ${
                    showPassword ? "fa-eye-slash" : "fa-eye"
                  }`}
                  onClick={togglePasswordVisibility}
                ></i>
              </span>
            </div>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

{
  /* <div className="d-flex justify-content-between align-items-center">
            <div className="form-check mb-0">
              <input
                className="form-check-input me-2"
                type="checkbox"
                defaultValue
                id="form2Example3"
              />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">
              Forgot password?
            </a>
          </div> */
}
