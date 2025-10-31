import React, { useState, useEffect } from "react";
import { allRatingData } from '../service/service.js';

let AllRatingUser = ({ user }) => {
  const [all, setAll] = useState([]);

  const AllUserInfo = async () => {
    const data = await allRatingData(user.id);
    setAll(data);
  };

  useEffect(() => {
    AllUserInfo();
  }, []);

  return (
    <div className="container mt-4">
      <div className="table-responsive shadow rounded p-3 bg-light">
        <h3 className="text-center text-danger mb-4">All User Ratings on Store</h3>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>User Name</th>
              <th>Store Name</th>
              <th>Rating</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {all.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.store}</td>
                <td>{data.rating}</td>
                <td>{new Date(data.created_at).toLocaleDateString('en-GB')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRatingUser;
