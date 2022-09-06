import React from "react";
import "./facts/Facts.css";

const neck = () => {
  const check =
    "https://97-maktab.uz/wp-content/uploads/2021/09/logo-150x150.png";
  const gerb ='https://97-maktab.uz/wp-content/uploads/2021/06/cropped-972px-Emblem_of_Uzbekistan.svg_-150x150.png';
  const talim = 'https://97-maktab.uz/wp-content/uploads/2021/09/channels4_profile-150x150.jpg';

  return (
    <>
      <section class="services py-5" id="services">
        <div class="container pt-5">
          <div class="row">
            <div class="col-md-12">
              <div class="section-header text-center pb-5">
                <h2>Rasmiy Saytlar / Официальные сайты</h2>
                <p>
                O'qituvchilar va Ota-onalar uchun foydali bo'lgan manbalar / Ресурсы, полезные для учителей и родителей
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-12 col-lg-4">
              <div class="card text-white text-center bg-dark pb-2 rounded-bff">
                <div class="card-body">
                  <img src={check} alt="img" width={100} height={100} />
                  <h3 class="card-title mt-3">Yagona interaktiv davlat xizmatlari portali</h3>
                  <button class="btn bg-light text-dark">Saytga o'tish</button>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-4">
              <div class="card text-white text-center bg-dark pb-2 rounded-bff">
                <div class="card-body">
                  <img src={gerb} alt="img" width={100} height={100} />
                  <h3 class="card-title mt-3 fs-4">O‘zbekiston Respublikasi Prezidentining rasmiy sayti</h3>
                  <button class="btn bg-light text-dark">Saytga o'tish</button>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-4">
              <div class="card text-white text-center bg-dark pb-2 rounded-bff">
                <div class="card-body">
                  <img className="rounded-circle" src={talim} alt="img" width={100} height={100} />
                  <h3 class="card-title mt-3 fs-4">O`zbekiston Respublikasi Xalq ta`lim vazirligi  rasmiy sayti</h3>
                  <button class="btn bg-light text-dark">Saytga o'tish</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default neck;
