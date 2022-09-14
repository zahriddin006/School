import React , {useRef} from "react";
import emailjs from "@emailjs/browser";
import './Todo';

const Todo = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm(
        "service_tkuh9ee",
        "template_ekpm3ds",
        form.current,
        "Qxg4CtGudfWh4LEfO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div className="container-md container-fluid pt-5" id="Coment">
        <div className="text-center">
          <h2 className="title text-dark py-4 mb-2 mt-5">
            Biz bilan bo'lanish / Cвяжитесь с нами
          </h2>
          <span className="bottom-line"></span>
        </div>
        <div className="contact-box row justify-content-center">
          <form
            ref={form}
            className="form col-12"
            method="post"
            action="./text.txt"
            onSubmit={sendEmail}
          >
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter name"
              name="name"
              autoComplete="off"
              required
            ></input>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="name2022@example.com"
              name="user_email"
              autoComplete="off"
              required
            ></input>

            <textarea
              className="form-control resize h-25"
              name="message"
              cols="30"
              rows="10"
              placeholder="masssage..."
              autoComplete="off"
            ></textarea>
            <button className="btn btn-primary mt-3" type="submit">Jo'atish / Отправлять</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Todo;
