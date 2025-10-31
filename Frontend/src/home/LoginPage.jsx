import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../service/service.js";

let Login = () => {
  let navigate = useNavigate();

  const bgStyle = {
   height: "92vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "400px",
    background: "#fff",
    borderRadius: "20px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
    padding: "30px",
  };

  let [login, setLogin] = useState({
    email: "",
    password: "",
  });

  let eventLogin = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  let verifyLogin = async () => {
  try {
    let result = await loginUser(login.email, login.password);
      console.log("Login result:", result);
    if (result.role.toLowerCase() === "admin") {
      navigate("/admin", { state: { user: result } });
    } else if (result.role === "user") {
      navigate("/guser", { state: { user: result } });
    } else if (result.role === "owner") {
      navigate("/owner", { state: { user: result } });
    } else {
      alert("❌ Invalid Username or Password");
    }
  } catch (err) {
    alert("⚠️ Login failed. Please check your credentials.");
  }
};

  return (
    <div style={bgStyle}>
      <div style={cardStyle}>
        <h2 className="text-center fw-bold text-success mb-4">Welcome Back</h2>

        <div className="form">
          <div className="form-group mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="text"
              name="email"
              value={login.email}
              className="form-control rounded-3"
              placeholder="Enter your email"
              onChange={eventLogin}
            />
          </div>

          <div className="form-group mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={login.password}
              className="form-control rounded-3"
              placeholder="Enter your password"
              onChange={eventLogin}
            />
          </div>

          <div className="form-group mb-3">
            <button
              className="btn btn-success w-100 fw-semibold rounded-pill shadow-sm"
              onClick={verifyLogin}
            >
               Login
            </button>
          </div>
        </div>

        <p className="text-center mt-3 text-muted">
          Don’t have an account?{" "}
          <Link to="/Register" className="fw-semibold text-decoration-none text-primary">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
