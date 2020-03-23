import React from 'react';
import { InputNumber, Button, Form } from 'antd';
import "antd/dist/antd.css";
import { useForm } from 'react-hook-form';

function InputSalary({placeholder, title, nameButtom}) {
    const styleDivInput = {
       // width:'30%',
        textAlign: 'center',
    }

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);  

    const onFinish = values => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    
    

    return(
        <div style={styleDivInput}>
            <Form 
                onSubmit={handleSubmit(onSubmit)}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}> 
            <Form.Item
                label={title}
                name="salary"
                rules={[
                {
                    required: true,
                    message: 'Por favor digite seu salário.',
                },
                ]}
            > 
                    <InputNumber
                        placeholder={placeholder}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={register({required: true})}>
                        {nameButtom}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default InputSalary ;