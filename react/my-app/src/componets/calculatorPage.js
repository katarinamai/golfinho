import React from 'react';
import InputSalary from './inputSalary';
import "antd/dist/antd.css";
import LoadingImg from './loadingImg';
import {Anchor} from 'antd';

function CalculatorPage() {
    const styleDiv = {
        //backgroundColor:'whiteSmoke',
        width:'90%',
        display:'flex',
        justifyContent:'center',
        marginTop: '5%',
        marginLeft:'5%',
        marginRight:'5%',
        padding:'2%',
        height:'500px',
        flexDirection: 'column',
        alignItems: 'center',
    }

    return(
            <section style={styleDiv} id="calculadora">
                <a href="#calculadora" className="anchor">#</a>
                <h3>Não divulgaremos para ninguém!!!</h3>
                <InputSalary 
                    placeholder={"Salário R$"} 
                    title={"Digite seu salário"}
                    nameButtom={"Calcular Orçamento"}
                />
                <LoadingImg/>
            </section>
    )
}

export default CalculatorPage ;