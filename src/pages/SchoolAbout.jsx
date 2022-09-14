import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./local.css";
import img1 from "../assets/shoolImage/img1.png";
import img2 from "../assets/shoolImage/img2.png";
import img3 from "../assets/shoolImage/img3.png";
import img4 from "../assets/shoolImage/img4.png";
import img5 from "../assets/shoolImage/img5.png";
import img6 from "../assets/shoolImage/img6.png";
import img7 from "../assets/shoolImage/img7.png";
import img8 from "../assets/shoolImage/img8.png";

const SchoolAbout = () => {
  let imgArr = [img1, img2, img3, img4, img5, img6, img7, img8];

  const [selectedimg, setSelectedimg] = useState(imgArr[0]);
  const gmap = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.2785846559977!2d69.29213531564646!3d40.30414447040255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b1bf7d8934797d%3A0x7afb294ff0559ab1!2s26-Orta%20Maktab!5e1!3m2!1sru!2s!4v1661000444792!5m2!1sru!2s`;

  return (
    <>
      <NavLink className="back-btn" to="/">
        <button className="btn btn-danger">Back</button>
      </NavLink>

      <div className="about">
        <div className="container">
          <div className="inner-about">
            <h2 className="text-center mt-5">Makta haqida</h2>
            <div className="duble-content mt-5 d-md-flex justify-content-center">
              <img src={img1} alt="" width={300} height={300} />
              <p className="px-3 pt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate reprehenderit in natus ullam excepturi ab repellat labore non, tempora expedita quasi facere aperiam, eveniet ea esse consequuntur. Nam, magni quisquam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate reprehenderit in natus ullam excepturi ab repellat labore non, tempora expedita quasi facere aperiam, eveniet ea esse consequuntur. Nam, magni quisquam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate reprehenderit in natus ullam excepturi ab repellat labore non, tempora expedita quasi facere aperiam, eveniet ea esse consequuntur. Nam, magni quisquam.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="school pt-5 mb-5">
        <div className="container">
          <div className="school-inner">
            <h2 className="text-center mt-4">Maktab fotografiyasi</h2>
            <img src={selectedimg} alt="Selected" className=" selected " />
            <div className="imgContainer ">
              {imgArr.map((img) => {
                return (
                  <img
                    style={{
                      border: selectedimg === img ? "4px solid blue" : "",
                    }}
                    src={img}
                    alt="rasm"
                    onClick={()=> setSelectedimg(img)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      
      <div className="footer bg-dark">
        <div className="container-fluid container-lg">
          <div className="footer-inner row d-flex justify-content-around
          align-items-start">

            <div className="logo-block text-center col-12 col-md-6 col-lg-3 pt-5">
              <a className="text-decoration-none text-light" href="#">
                <h2 className="title">26-Maktab</h2>
              </a>
              <p className="mt-2 text-light">
              Toshkent shahar Bekobod tumani xalq ta’limi bo‘limiga qarashli 26-umumta’lim maktabi.
              </p>
            </div>

            <div className="navigate-block col-12 col-md-6 col-lg-3 pt-5">
              <h2 className="text-light fs-5">
                Qo'shimcha bo'limlar
              </h2>
              <ul className="list-unstyled ms-3">
              <li className="nav-item text-secondary">
              <NavLink className="nav-link text-secondary d-inline-block" to="/">
                  <span>
                    <i class="bi bi-house-fill fs-5 pe-2"></i>
                  </span>
                  Asosiy
                
                  Asosiy
            </NavLink>
              </li>
              </ul>
            </div>

            <div className="maps-block col-12 col-md-6 col-lg-3 pt-5 m-0 px-0 text-center">
              <h2 className="text-light fs-5 m-0 px-0">Xaritadan Ko'rinishi</h2>
            <iframe className="border-0 pb-5 m-0 px-0" src={gmap} width="300" height="320" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolAbout;
