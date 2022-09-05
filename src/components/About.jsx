import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  const about = "https://97-maktab.uz/wp-content/uploads/2021/10/photo_2021-10-06_15-33-29.jpg"
  return (
    <>
      <section className="about section-padding" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="about-img">
                <img alt="" className="img-fluid" src={about} />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div className="about-text">
                <h2>
                  Bizning maktab / Наша школа
                </h2>
                <p>
                Toshkent viloyati Bekobod tumani xalq ta’limi bo‘limiga qarashli 26-umumta’lim maktabi / 26-я общеобразовательная школа отдела народного образования Бекабадского района Ташкентской области
                </p>
                <NavLink to="/about">
                <a className="btn btn-warning" href="#">
                  Batafsil / учить больше
                </a>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
