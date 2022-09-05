import React from 'react';
import { NavLink } from 'react-router-dom';

const SchoolAbout = () => {
  return (
    <>
      <NavLink className="back-btn" to="/">
        <button className="btn btn-danger">Back</button>
      </NavLink>

      <div className="school pt-5">
        <div className="container">
          <div className="school-inner d-flex justify-content-center">
            <h2>Maktab haqida</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolAbout;