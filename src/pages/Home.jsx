import React from 'react';
import About from '../components/About';
import Facts from '../components/Facts';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Main from '../components/Main';
import News from '../components/News';
import Todo from '../components/Todo';
import Neck from '../components/Neck';
import Testlar from '../components/Testlar';
import Foot from '../components/Foot';

const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Main/>
      <Facts/>
      <Todo/>
      <News/>
      <Neck/>
      <Testlar/>
      <Foot/>
    </>
  );
};

export default Home;