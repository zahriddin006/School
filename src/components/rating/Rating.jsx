import React from "react";
import "./Rating.css";

const rating = () => {
  return (
    <div className="container-lg container-fluid">
      <h2 className="text-center my-4">Rating</h2>
      <div class="table-responsive">
        <table class="table">
          <caption>2022-2023</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Sinflar</th>
              <th scope="col">Stars</th>
              <th scope="col">rating(1/5)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>11 "A"</td>
              <td>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star"></i>
              </td>
              <td>
                <strong>4</strong>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>11 "B"</td>
              <td>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i>
                <i class="bi bi-star"></i>
              </td>
              <td>
                <strong>3.5</strong>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>10 "A"</td>
              <td>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </td>
              <td>
                <strong>5</strong>
              </td>
            </tr>

            <tr>
              <th scope="row">4</th>
              <td>10 "B"</td>
              <td>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
              </td>
              <td>
                <strong>3</strong>
              </td>
            </tr>

            <tr>
              <th scope="row">5</th>
              <td>9 "A"</td>
              <td>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i>
              </td>
              <td>
                <strong>4.5</strong>
              </td>
            </tr>

            <tr>
              <th scope="row">6</th>
              <td>9 "B"</td>
              <td>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
              </td>
              <td>
                <strong>3</strong>
              </td>
            </tr>

            <tr>
              <th scope="row">7</th>
              <td>8 "A"</td>
              <td>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
              </td>
              <td>
                <strong>3</strong>
              </td>
            </tr>

            <tr>
              <th scope="row">8</th>
              <td>8 "B"</td>
              <td>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
              </td>
              <td>
                <strong>3</strong>
              </td>
            </tr>

            <tr>
              <th scope="row">9</th>
              <td>7 "A"</td>
              <td>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
              </td>
              <td>
                <strong>3</strong>
              </td>
            </tr>

            <tr>
              <th scope="row">10</th>
              <td>7 "B"</td>
              <td>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
              </td>
              <td>
                <strong>3</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default rating;
