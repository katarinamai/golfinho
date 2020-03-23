import React from 'react';
import { Layout } from 'antd';
import './App.css';
import HeaderPage from './componets/headerPage';
import CaculatorPage from './componets/calculatorPage';
import FooterPage from './componets/footerPage';
import About from './componets/about';
import Home from './componets/home';
import Banner from './componets/banner'; 

function App() {
  return (
    <div>
      <HeaderPage nav1="Home" nav2="Calculadora" nav3="Sobre"/>
      <Layout className="AppLayout layout">
        <div className="styleDiv">
          <Home/>
          <Banner/>
          <CaculatorPage/>
          <Banner/>
          <About/>
        </div>
      </Layout>
      <FooterPage/>
    </div>
  );
}

export default App;
