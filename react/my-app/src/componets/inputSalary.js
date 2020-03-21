import React, { useState } from 'react';
import { Input, Button } from 'antd';
import "antd/dist/antd.css";
import { useForm } from 'react-hook-form';
import Loading from './loading';

function InputSalary({placeholder, title}) {
    const styleDiv = {
        width:'30%',
        textAlign: 'center'
    }

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors); 
    console.log(errors);

    return(
        <div style={styleDiv}>
            <form onSubmit={handleSubmit(onSubmit)}>  
                <span>{title}</span>             
                <Input 
                    type="text"
                    name="name"
                    placeholder={placeholder}
                />
                <Button type="submit" onClick={register({required: true})}>Calcular</Button>
            </form>
        </div>
    );
}

export default InputSalary ;