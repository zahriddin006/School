import React from "react";
import { Link } from "react-router-dom";
import "./Main.css"

const Main = () => {
  return (
    <>
      <section class="portfolio" id="main">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-header text-center pb-5">
                <h2 className="mb-3">Kerakli manbalar / Требуемые ресурсы</h2>
                <p>
                  Maktabdagi turli to'garaklar va turli xil foydali malumotlar / Различные кружки и различная полезная информация в школе
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-12 col-md-12 col-lg-4 mb-2">
              <div class="card text-light text-center f1 pb-2">
                <div class="card-body text-dark">
                  <div class="img-area mb-4">
                    
                    <i class="bi bi-journal-bookmark-fill"></i>
                  </div>
                  <h3 class="card-title">ilmiy to'garaklar</h3>
                  <p class="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <Link  to="/"  class="btn bg-warning text-dark">
                  Batafsil / учить больше</Link>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-4 mb-2">
              <div class="card text-light text-center f2 pb-2">
                <div class="card-body text-dark">
                  <div class="img-area mb-4">
                    <i class="bi bi-check-circle"></i>
                  </div>
                  <h3 class="card-title">A'lochi o'quvchilar</h3>
                  <p class="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <Link  to="/active-students"  class="btn bg-warning text-dark">
                  Batafsil / учить больше</Link>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-4 mb-2">
              <div class="card text-light text-center f3 pb-2">
                <div class="card-body text-dark">
                  <div class="img-area mb-4">
                    <i class="bi bi-person-square"></i>
                  </div>
                  <h3 class="card-title">Sport to'garaklar</h3>
                  <p class="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <Link  to="/sport"  class="btn bg-warning text-dark">
                  Batafsil / учить больше</Link>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-4 mb-2">
              <div class="card text-light text-center f4 pb-2">
                <div class="card-body text-dark">
                  <div class="img-area mb-4">
                    <i class="bi bi-calendar-date"></i>
                  </div>
                  <h3 class="card-title">Dars jadvali</h3>
                  <p class="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <Link  to="/jadval"  class="btn bg-warning text-dark">
                  Batafsil / учить больше</Link>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-4 mb-2">
              <div class="card text-light text-center f5 pb-2">
                <div class="card-body text-dark">
                  <div class="img-area mb-4">
                  <i class="bi bi-mortarboard-fill"></i>
                  </div>
                  <h3 class="card-title">Kundalik.com</h3>
                  <p class="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <a className="btn btn-warning" href="https://kundalik.com/">
                  Batafsil / учить больше
                </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
