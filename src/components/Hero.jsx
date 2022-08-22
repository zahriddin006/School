import React from 'react';
import './Hero.css'

const Hero = () => {
  return (
    <>
      <section className="hero bg-secondary mb-4">
        <div className="container">
          <div className="hero-inner d-flex justify-content-center align-items-center flex-column">
            <h1 className="text-center text-white mb-3">
              26-sonli Umumiy o’rta ta’lim maktabining rasmiy sayti
            </h1>
            <p className="text-light text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsa illum asperiores sunt. Doloribus, nesciunt, sint et corrupti eaque facere necessitatibus, id provident laboriosam enim cumque?
            </p>
            <button className='butn shadow'>batafsil / учить больше</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;