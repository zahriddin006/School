import React from "react";

const Foot = () => {
  const gmap = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.2785846559977!2d69.29213531564646!3d40.30414447040255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b1bf7d8934797d%3A0x7afb294ff0559ab1!2s26-Orta%20Maktab!5e1!3m2!1sru!2s!4v1661000444792!5m2!1sru!2s`;
  return (
    <>
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
                <a className="nav-link d-inline-block" href="#">
                  <span>
                    <i class="bi bi-house-fill fs-5 pe-2"></i>
                  </span>
                  Asosiy
                </a>
              </li>
              <li className="nav-item text-success">
                <a className="nav-link d-inline-block" href="#News">
                <span>
                    <i class="bi bi-newspaper fs-5 pe-2"></i>
                  </span>
                  Yangiliklar
                </a>
              </li>
              <li className="nav-item text-warning">
                <a className="nav-link d-inline-block" href="#Coment">
                <span>
                    <i class="bi bi-chat fs-5 pe-2"></i>
                  </span>
                  Izoh qoldirish
                </a>
              </li>
              <li className="nav-item text-danger">
                <a className="nav-link d-inline-block" href="#services">
                <span>
                    <i class="bi bi-browser-chrome fs-5 pe-2"></i>
                  </span>
                  Rasmiy Saytlar
                </a>
              </li>
              <li className="nav-item text-primary">
              
                <a className="nav-link d-inline-block" target='blank' href="https://kundalik.com/">
                <span>
                    <i class="bi bi-calendar-week fs-5 pe-2"></i>
                  </span>
                  Kundalik.com
                </a>
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

export default Foot;
