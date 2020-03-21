import React from 'react';
import './App.css';
import { Layout, Row, Col, Card } from 'antd';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import HeaderPage from './componets/headerPage';
import CaculatorPage from './componets/calculatorPage';
import FooterPage from './componets/footerPage';
import About from './componets/about';

function App() {
  return (
    <Router>
      <div>
        <HeaderPage nav1="Calculadora" nav2="Sobre"/>
        <Layout className="AppLayout">
          <Switch>
            <Route path='/' exact component={CaculatorPage}/>
            <Route path='/sobre' component={About}/>
          </Switch>
        </Layout>
        <FooterPage/>
      </div>
    </Router>
  );
}

export default App;
