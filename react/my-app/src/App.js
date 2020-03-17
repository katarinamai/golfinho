import React from 'react';
import './App.css';
import HeaderPage from './componets/headerPage';
import ContentPage from './componets/contentPage';
import FooterPage from './componets/footerPage';
import { Layout } from 'antd';

function App() {
  return (
    <>
      <div>
        <Layout>
          <HeaderPage/>
          <ContentPage/>
          <FooterPage/>
        </Layout>
      </div>
    </>
  );
}

export default App;
