import React from "react";
import CountUp from "react-countup";
import './Facts.css';

const Facts = () => {
  return (
    <>
      <section className="team" id="facts">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="section-header text-center pb-4">
                <h2>Maktab statistikasi / Статистика школы</h2>
                <span className="bottom-line"></span>
                <p>
                Maktabning asosiy ko'rsatgich parametrlari / Основные индикаторные параметры школы
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 mb-3">
              <div className="card text-center">
                <div className="card-body">
                  <h3 className="card-title py-2">
                    <CountUp end={20}/>
                  </h3>
                  <p className="card-text">O'qtuvchilar soni</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-3">
              <div className="card text-center">
                <div className="card-body">
                  <h3 className="card-title py-2">
                    <CountUp end={658} />
                  </h3>
                  <p className="card-text">O'quvchilar soni</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-3">
              <div className="card text-center">
                <div className="card-body">
                  <h3 className="card-title py-2">
                    <CountUp end={21} />
                  </h3>
                  <p className="card-text">Sinflar soni</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-3">
              <div className="card text-center">
                <div className="card-body">
                  <h3 className="card-title py-2">
                    <CountUp end={92345} />
                  </h3>
                  <p className="card-text">Erishilgan yutuqlar soni</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facts;
