import React from 'react';
import { NavLink } from 'react-router-dom';

const SchoolMis = () => {
  return (
    <>
      <NavLink className="back-btn" to="/">
        <button className="btn btn-danger">Back</button>
      </NavLink>
      <div className="qoida pt-5">
        <div className="container">
          <div className="qoida-inner d-flex justify-content-center">
            <h2>Maktab qoidalari</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolMis;