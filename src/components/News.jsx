import React, { useEffect } from "react";
import "./swiper/swiper-bundle.min.css";
import "./swiper/swiper-bundle.min.js";
import "./swiper/style.css";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";

const News = () => {
  
  useEffect(() => {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      grabCursor: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <>
      <div className="News" id="News">
        <div className="container-lg text-center">
          <h2>Eng so'nggi yangiliklar / Последние новости</h2>
          <span className="bottom-line"></span>
        </div>
        <section class="container-handle">
          <div class="testimonial mySwiper">
            <div class="testi-content swiper-wrapper">
              <div class="slide swiper-slide">
                <img src={img1} alt="" class="image" />
                <h2 className="text-center">Yangilik 1</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam, saepe provident dolorem a quaerat quo error facere
                  nihil deleniti eligendi ipsum adipisci, fugit, architecto amet
                  asperiores doloremque deserunt eum nemo.
                </p>
                <i class="bx bxs-quote-alt-left quote-icon"></i>
                <div class="details">
                  <span class="name">
                    <span className="job">Date: </span> 20-06-2022
                  </span>
                </div>
              </div>
              <div class="slide swiper-slide">
                <img src={img2} alt="" class="image" />
                <h2 className="text-center">Yangilik 2</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam, saepe provident dolorem a quaerat quo error facere
                  nihil deleniti eligendi ipsum adipisci, fugit, architecto amet
                  asperiores doloremque deserunt eum nemo.
                </p>
                <i class="bx bxs-quote-alt-left quote-icon"></i>
                <div class="details">
                  <span class="name">Marnie Lotter</span>
                  <span class="job">Web Developer</span>
                </div>
              </div>
              <div class="slide swiper-slide">
                <img src={img3} alt="" class="image" />
                <h2 className="text-center">Yangilik 3</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam, saepe provident dolorem a quaerat quo error facere
                  nihil deleniti eligendi ipsum adipisci, fugit, architecto amet
                  asperiores doloremque deserunt eum nemo.
                </p>
                <i class="bx bxs-quote-alt-left quote-icon"></i>
                <div class="details">
                  <span class="name">Marnie Lotter</span>
                  <span class="job">Web Developer</span>
                </div>
              </div>
            </div>
            <div class="swiper-button-next nav-btn"></div>
            <div class="swiper-button-prev nav-btn"></div>
            <div class="swiper-pagination"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default News;
