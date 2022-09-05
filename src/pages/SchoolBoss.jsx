import React from "react";
import { NavLink } from "react-router-dom";

const SchoolBoss = () => {
  return (
    <>
      <NavLink className="back-btn" to="/">
        <button className="btn btn-danger">Back</button>
      </NavLink>
      <div className="royal pt-5">
        <div className="container">
          <div className="royal-inner d-flex justify-content-center">
            <h2>Raxbariyat</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolBoss;
