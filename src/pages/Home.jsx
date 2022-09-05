import React from 'react';
import About from '../components/About';
import Facts from '../components/Facts';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Main from '../components/Main';
import Todo from '../components/Todo';
import Neck from '../components/Neck';
import Testlar from '../components/Testlar';
import Foot from '../components/Foot';
import News from '../components/News';

const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Main/>
      <Facts/>
      <Todo/>
      <Neck/>
      <News/>
      <Testlar/>
      <Foot/>
    </>
  );
};

export default Home;