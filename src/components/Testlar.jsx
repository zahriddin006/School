import React from "react";

const Testlar = () => {
  return (
    <>
      <div className="tests py-5" id="test">
        <div className="container">
          <h3 className="text-center mt-5">
            Testlar bo'limi / Тестовый раздел
          </h3>
          <p className="text-center mt-3">
            Bilimlarni mustahkamlash uchun mashqlar / Упражнения для закрепления
            знаний
          </p>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Ingliz Tili
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Ingliz tili fani testlariga xush kelibsiz, Testni boshlash
                  uchun pastdagi "Start" tugmasini bosing 😊! <br />
                  <a
                    className="btn btn-primary mt-2"
                    href="https://kun.uz"
                    target="blank"
                  >
                    Start
                  </a>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Matematika
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Matematika fani testlariga xush kelibsiz, Testni boshlash
                  uchun pastdagi "Start" tugmasini bosing 👇! <br />
                  <a
                    className="btn btn-primary mt-2"
                    href="https://kun.uz"
                    target="blank"
                  >
                    Start
                  </a>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Tarix
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Tarix fani testlariga xush kelibsiz, Testni boshlash
                  uchun pastdagi "Start" tugmasini bosing ⬇️! <br />
                  <a
                    className="btn btn-primary mt-2"
                    href="https://kun.uz"
                    target="blank"
                  >
                    Start
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testlar;
