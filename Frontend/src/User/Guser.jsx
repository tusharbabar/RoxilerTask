import React from "react";
import Usidebar from "./Usidebar";
import { Routes, Route, useLocation } from "react-router-dom";
import Userdashboard from "./Userdashboard";
import Userrating from "./Userrating";

const Guser = () => {
  const location = useLocation();
  const user = location.state?.user;

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        {/* Sidebar */}
        <div className="col-12 col-md-3 col-lg-2 sidebar-container">
          <Usidebar user={user} />
        </div>

        {/* Main Content */}
        <div className="col-12 col-md-9 col-lg-10 content-container">
          <Routes>
            <Route path="/" element={<Userdashboard user={user} />} />
            <Route path="userrating" element={<Userrating user={user} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Guser;
