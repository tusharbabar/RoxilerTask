import React, { useState, useEffect } from "react";
import { countUser, countStore } from "../service/service.js";

let AdminDash = ({ user }) => {
  let [uCount, setUsercount] = useState(0);
  let [sCount, setStorecount] = useState(0);

  let totalUser = async () => {
    let count = await countUser();
    setUsercount(Number(count));
  };

  let totalStores = async () => {
    let count = await countStore();
    setStorecount(Number(count));
  };

  useEffect(() => {
    totalUser();
    totalStores();
  }, []);

  return (
    <>
      {/* Header */}
      <div className="container-fluid py-4 text-center text-dark" >
        <h1 className="fw-bold">👑 Welcome, Admin {user.name}</h1>
        <p className="lead">Manage users & stores with ease</p>
      </div>

      {/* Stats Section */}
      <div className="container mt-5">
        <div className="row justify-content-center g-4">

          {/* Users Card */}
          <div className="col-md-5">
            <div className="card shadow-lg border-0 rounded-4 h-100" style={{ background: "linear-gradient(135deg, #ff9a9e, #fad0c4)" }}>
              <div className="card-body text-center text-dark">
                <i className="bi bi-people-fill fs-1 mb-3"></i>
                <h3 className="fw-bold">Total Users</h3>
                <h2 className="display-5 fw-bolder">{uCount}</h2>
              </div>
            </div>
          </div>

          {/* Stores Card */}
          <div className="col-md-5">
            <div className="card shadow-lg border-0 rounded-4 h-100" style={{ background: "linear-gradient(135deg, #89f7fe, #66a6ff)" }}>
              <div className="card-body text-center text-dark">
                <i className="bi bi-shop fs-1 mb-3"></i>
                <h3 className="fw-bold">Total Stores</h3>
                <h2 className="display-5 fw-bolder">{sCount}</h2>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AdminDash;
