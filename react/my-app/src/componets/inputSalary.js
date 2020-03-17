import React from 'react';
import { Input } from 'antd';

function InputSalary({ defaultValue, onChange, placeholder, title }) {

    function onChange(value) {
        console.log('changed', value);
      }

    return(
        <div>
            <div>{title}</div>
            <Input 
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}

export default InputSalary ;