import React, { useState, useEffect } from "react";
import { avgRatingData } from '../service/service.js';

let AvgRating = ({ user }) => {
  const [avg, setAvg] = useState([]);

  const AvgDetail = async () => {
    let data = await avgRatingData(user.id);
    setAvg(data);
  };

  useEffect(() => {
    AvgDetail();
  }, []);

  return (
    <div className="container mt-4">
      <div className="table-responsive shadow rounded p-3 bg-light">
        <h3 className="text-center text-danger mb-4">Average Rating of Stores</h3>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Store</th>
              <th>Address</th>
              <th>Average Rating</th>
              <th>Total Rating</th>
            </tr>
          </thead>
          <tbody>
            {avg.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.address}</td>
                <td>{data.avg}</td>
                <td>{data.sum}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AvgRating;
