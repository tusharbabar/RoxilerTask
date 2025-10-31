import React from "react";
import OwnerSide from "./OwnerSide";
import AvgRating from "./AvgRating";
import AllRatingUser from "./AllUserRating";
import OwnerDash from "./OwnerDash.jsx";
import { Routes, Route ,useLocation} from "react-router-dom";

let Owner = () => {

  const location = useLocation();
  const user = location.state?.user;
  return (
   <div className="container-fluid p-0">
  <div className="row flex-md-nowrap">
    <div className="col-12 col-md-2">
      <OwnerSide user={user} />
    </div>
    <div className="col-12 col-md-10" style={{ backgroundColor: "#f1faee", minHeight: '98vh', borderRadius: "20px" }}>
      <Routes>
        <Route index element={<OwnerDash user={user} />} />
        <Route path="avg" element={<AvgRating user={user} />} />
        <Route path="allUser" element={<AllRatingUser user={user} />} />
      </Routes>
    </div>
  </div>
</div>

  );
};

export default Owner;
