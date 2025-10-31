  
import React from "react";

export default function home() {
  return (
    <div className="container text-center" style={{ paddingTop: "100px" }}>
      <h1 className="display-4 fw-bold text-primary mb-3">⭐ Welcome to RateMyStore</h1>
      <p className="lead text-muted mb-4">
        Discover and rate your favorite stores.  
        Whether you're a customer, store owner, or admin — we've got a space for you.
      </p>

      <div className="d-flex justify-content-center gap-3">
        <a href="/login" className="btn btn-primary btn-lg">
           Login
        </a>
        <a href="/register" className="btn btn-success btn-lg">
           Sign Up
        </a>
      </div>

      <div className="mt-5">
        <h3 className="fw-semibold">Why RateMyStore?</h3>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h5> Rate Stores</h5>
              <p className="text-muted">Share your experiences and rate shops from 1 to 5 stars.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h5> Store Owners</h5>
              <p className="text-muted">Owners can view ratings & improve services based on feedback.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h5> Admin Panel</h5>
              <p className="text-muted">Admins manage users, owners, and maintain the platform.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
