import React from 'react';
import About from '../components/About';
import Facts from '../components/facts/Facts';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Main from '../components/main/Main';
import Todo from '../components/contact/Todo';
import Neck from '../components/Neck';
import Testlar from '../components/Testlar';
import Foot from '../components/Foot';
import News from '../components/news/News';
import Rating from '../components/rating/Rating';

const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Main/>
      <Facts/>
      <Rating/>
      <Todo/>
      <Neck/>
      {/* <News/> */}
      <Testlar/>
      <Foot/>
    </>
  );
};

export default Home;