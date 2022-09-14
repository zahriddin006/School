import React from "react";
import { NavLink } from "react-router-dom";
import data from "./school.json";

const SchoolBoss = () => {
  let img1 = "https://97-maktab.uz/wp-content/uploads/2021/09/images.png";

  let teachers = data;

  return (
    <>
      <NavLink className="back-btn" to="/">
        <button className="btn btn-danger">Back</button>
      </NavLink>
      <div className="royal pt-5">
        <div className="container">
          <div className="royal-inner">
            <h2 className="text-center">Raxbariyat</h2>
            <p className="text-center">
              Bu bo'limda siz Maktabimizdagi o'quvchilardan tashqari bo'lgan{" "}
              <br /> o'qtuvchilar haqida malumot olishingiz mumkin.
            </p>
            <div className="techers mt-5">
              <div className="column-card d-flex flex-md-row flex-column align-items-center bg-secondary p-3 rounded-3">
                <img className="column-card-img me-md-3" src={img1} alt="salom" />
                <div className="column-cardbody px-4 py-3">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <strong>Name:</strong> Palonchiyev Palonchi
                    </li>
                    <li className="mb-2">
                      <strong>Job:</strong> Maktab direktori
                    </li>
                    <li className="mb-2">
                      <strong>Experience:</strong> 5 years
                    </li>
                    <li className="mb-2">
                      <strong>Age</strong> 25 years old
                    </li>
                  </ul>
                </div>
              </div>

              <div class="table-responsive mt-5">
                <h2 className="text-center mb-3">O'qtuvchilar ro'yhati</h2>
                <table class="table">
                  <caption>List of Teachers</caption>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Experience</th>
                      <th scope="col">Job</th>
                      <th scope="col">Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teachers.map((e) => {
                      return (
                        <tr>
                          <th scope="row">{e.id}</th>
                          <td>{e.name}</td>
                          <td>{e.experience}</td>
                          <td>{e.job}</td>
                          <td>{e.age}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolBoss;
