import React, { useState, useEffect } from 'react';
import InputSalary from '../inputSalary';
import "antd/dist/antd.css";
import LoadingImg from '../loadingImg';
import {Anchor} from 'antd';
import ScrollableAnchor from 'react-scrollable-anchor';

import './styles.css';

function CalculatorPage() {

    const [className, setclassName] = useState('hidden');
    function handleScroll() { 
        if (document.documentElement.scrollTop > 200) {
          setclassName('fade');
          console.log(className);
         } 
       }
    
       useEffect(() => {
        // Atualiza o titulo do documento usando a API do browser
        window.onscroll = () => handleScroll()
      }, []);

    return(
        <ScrollableAnchor id="calculadora">
            <section className="div classNameFade">
                <Anchor affix={false}>
                    <a href="#calculadora" className="anchor" >#</a>
                </Anchor>
                <h3>Não divulgaremos para ninguém!!!</h3>
                <InputSalary 
                    placeholder={"Salário R$"} 
                    title={"Digite seu salário"}
                    nameButtom={"Calcular Orçamento"}
                />
                <LoadingImg/>
            </section>
        </ScrollableAnchor> 
    )
}

export default CalculatorPage ;