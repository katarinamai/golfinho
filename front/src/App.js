import React from 'react';
import { Layout } from 'antd';
import './App.css';
import HeaderPage from './pages/headerPage';
import CaculatorPage from './pages/Calculator';
import FooterPage from './pages/footerPage';
import About from './pages/About';
import Home from './pages/Home';
import Banner from './components/Banner'; 

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
