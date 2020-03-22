import React from 'react';
import { Layout } from 'antd';
import './App.css';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import HeaderPage from './componets/headerPage';
import CaculatorPage from './componets/calculatorPage';
import FooterPage from './componets/footerPage';
import About from './componets/about';
import Home from './componets/home';

function App() {
  return (
    <Router>
      <div>
        <HeaderPage nav1="Home" nav2="Calculadora" nav2="Sobre"/>
        <Layout className="AppLayout layout">
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/calculadora' component={CaculatorPage}/>
            <Route path='/sobre' component={About}/>
          </Switch>
        </Layout>
        <FooterPage/>
      </div>
    </Router>
  );
}

export default App;
