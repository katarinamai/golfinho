import React from 'react';
import InputSalary from './inputSalary';
import "antd/dist/antd.css";
import LoadingImg from './loadingImg'

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
                <a href="#calculadora" class="anchor">#</a>
                <span>Digite seu salário abaixo e clique em calcular.</span>
                <InputSalary 
                    placeholder={"Salário R$"} 
                    title={"Digite seu salário"} 
                />
                <LoadingImg/>
            </section>
    )
}

export default CalculatorPage ;