import React, { useState } from "react";
import { register } from "../service/service.js";

let AddUser = ({ user }) => {
  let [users, setUser] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    role: "",
  });

  let registerUser = (e) => {
    setUser({
      ...users,
      [e.target.name]: e.target.value,
    });
  };

  let registerCall = async () => {
    let result = await register(
      users.name,
      users.email,
      users.password,
      users.address,
      users.role
    );
    alert(result);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4" style={{ maxWidth: "600px", width: "100%" }}>
        <h2 className="text-center text-primary fw-bold mb-4">
          <i className="bi bi-person-plus-fill me-2"></i> Add User
        </h2>

        <div className="form">
          {/* Name */}
          <div className="form-group mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={users.name}
              className="form-control"
              placeholder="Enter full name"
              onChange={registerUser}
            />
          </div>

          {/* Email */}
          <div className="form-group mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              value={users.email}
              className="form-control"
              placeholder="Enter email"
              onChange={registerUser}
            />
          </div>

          {/* Address */}
          <div className="form-group mb-3">
            <label className="form-label fw-semibold">Address</label>
            <input
              type="text"
              name="address"
              value={users.address}
              className="form-control"
              placeholder="Enter address"
              onChange={registerUser}
            />
          </div>

          {/* Password */}
          <div className="form-group mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={users.password}
              className="form-control"
              placeholder="Enter password"
              onChange={registerUser}
            />
          </div>

          {/* Role */}
          <div className="form-group mb-4">
            <label className="form-label fw-semibold">Role</label>
            <select
              className="form-control"
              name="role"
              value={users.role}
              onChange={registerUser}
            >
              <option value="">Select role</option>
              <option value="owner">Owner</option>
              <option value="user">User</option>
            </select>
          </div>

          {/* Button */}
          <div className="d-grid">
            <button
              type="button"
              className="btn btn-primary fw-bold"
              onClick={registerCall}
            >
              <i className="bi bi-person-check-fill me-2"></i> Register User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddUser;
