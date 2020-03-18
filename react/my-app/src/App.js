import React from 'react';
import './App.css';
import HeaderPage from './componets/headerPage';
import ContentPage from './componets/contentPage';
import FooterPage from './componets/footerPage';

function App() {
  return (
    <>
      <div>
        <HeaderPage nav1="Calculadora" nav2="Sobre"/>
        <ContentPage/>
        <FooterPage/>
      </div>
    </>
  );
}

export default App;
