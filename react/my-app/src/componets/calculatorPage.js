import React from 'react';
import InputSalary from './inputSalary';
import "antd/dist/antd.css";
import Loading from './loading';

function CalculatorPage() {
    const styleDiv = {
        backgroundColor:'white',
        width:'90%',
        display:'flex',
        justifyContent:'center',
        marginTop: '0.5%',
        marginLeft:'5%',
        marginRight:'5%',
        padding:'2%',
        height:'50%'
    }

    return(
            <div style={styleDiv}>
                <InputSalary 
                    placeholder={"Input a number"} 
                    title={"Enter your salary"} 
                />
                <Loading/>
            </div>
    )
}

export default CalculatorPage ;