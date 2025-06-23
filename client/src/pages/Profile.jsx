import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const getInitials = (username) => {
    return username ? username.charAt(0).toUpperCase() : "?";
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <div className="text-center mb-4">
              <div
                className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "100px", height: "100px", fontSize: "36px" }}
              >
                {getInitials(user?.username)}
              </div>
            </div>
            <h4 className="text-center mb-3">{user?.username}</h4>
            <div className="list-group">
              <div className="list-group-item">
                <strong>Email:</strong> {user?.email}
              </div>
              <div className="list-group-item">
                <strong>Phone:</strong> {user?.phone}
              </div>
              <div className="list-group-item">
                <strong>Role:</strong> {user?.role}
              </div>
              <div className="list-group-item">
                <strong>Status:</strong>{" "}
                {user?.isVerified ? "Verified" : "Not Verified"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
