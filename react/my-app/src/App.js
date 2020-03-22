import React from 'react';
import { Layout } from 'antd';
import './App.css';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import HeaderPage from './componets/headerPage';
import CaculatorPage from './componets/calculatorPage';
import FooterPage from './componets/footerPage';
import About from './componets/about';
import Home from './componets/home';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <Router>
      <div>
        <HeaderPage nav1="Home" nav2="Calculadora" nav3="Sobre"/>
        <Layout className="AppLayout layout">
          <div className="styleDiv">
            <Home/>
            <CaculatorPage/>
            <About/>
          </div>
        </Layout>
        <FooterPage/>
      </div>
    </Router>
  );
}

export default App;
