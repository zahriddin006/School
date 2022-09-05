import React from "react";
import "./News.css";

const News = () => {
  let sliderItem = document.querySelectorAll(".slider-item");

  return (
    <>
      <div className="slider pt-5" id="News">
        <h2 className="text-center mt-3">Slider</h2>
        <div className="container">
          <div className="slider-wrapper">
            <div className="slider-item bg-primary">
              <h2>Item 1</h2>
            </div>
            <div className="slider-item bg-primary">
              <h2>Item 2</h2>
            </div>
            <div className="slider-item bg-primary">
              <h2>Item 3</h2>
            </div>
            <div className="slider-item bg-primary">
              <h2>Item 4</h2>
            </div>
            <div className="slider-item bg-primary">
              <h2>Item 5</h2>
            </div>
            <div className="slider-item bg-primary">
              <h2>Item 6</h2>
            </div>
            <div className="slider-item bg-primary">
              <h2>Item 7</h2>
            </div>
            <div className="slider-item bg-primary">
              <h2>Item 8</h2>
            </div>
            <div className="slider-item bg-primary">
              <h2>Item 9</h2>
            </div>
            <div className="slider-item bg-primary">
              <h2>Item 10</h2>
            </div>
            <div className="slider-item bg-primary">
              <h2>Item 11</h2>
            </div>
            <div className="slider-item bg-primary">
              <h2>Item 12</h2>
            </div>
          </div>
          <div className="text-center mt-3">
            <button className="leftBtn me-3"> prev </button>
            <button className="rightBtn ms-3"> next </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
