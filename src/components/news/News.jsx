import React from "react";
import "./News.css";

const News = () => {



  return (
    <div className="slider">
      <div className="container">
        <div className="slider-inner d-flex justify-content-center">
          <div className="slider-wrapper">
            {/* start 1 */}

            <div className="slider-item card border-0">
              <img
                className="card-img-top"
                src={
                  "https://img.freepik.com/free-icon/x-symbol_318-1407.jpg?w=2000"
                }
                width="320"
                height="160"
                alt=""
              />
              <div className="card-handle">
                <h1 className="card-title">Title 1</h1>
                <p className="card-text descru">Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id nobis aliquid nam quisquam reprehenderit dignissimos hic, cumque similique adipisci quos facere, corporis tempora a quasi veniam aut magni repellat fugit adipisci quos facere, corporis tempora a quasi veniam aut magni repellat fugit?</p>
                <h6 className="card-text">date: 1999-08-31</h6>
                <p className="card-text">from person name</p>
              </div>
            </div>

            {/* end 1*/}

          </div>
        </div>
        <div className="controller d-flex justify-content-center gap-3 mt-2">
          <button className="btn btn-primary" type="button">left</button>
          <button className="btn btn-primary" type="button">right</button>
        </div>
      </div>
    </div>
  );
};

export default News;
