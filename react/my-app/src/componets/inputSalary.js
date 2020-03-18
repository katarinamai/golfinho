import React from 'react';
import { Input, Button } from 'antd';
import "antd/dist/antd.css";

function InputSalary({ defaultValue, onChange, placeholder, title }) {

    function onChange(value) {
        console.log('changed', value);
      }

    const styleDiv = {
        width:'30%',
        textAlign: 'center'
    }

    return(
        <div style={styleDiv}>                
            <Input 
                onChange={onChange}
                placeholder={placeholder}
            />
            <Button type="primary">Calcular</Button>
                
        </div>
    );
}

export default InputSalary ;