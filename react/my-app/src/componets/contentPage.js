import React from 'react';
import InputSalary from './inputSalary';
import { Layout, Row, Col, Card } from 'antd';
import "antd/dist/antd.css";

function ContentPage() {

    const styleRow = {
        //justify:"center"
        border: '1px solid black',
        height: '100px'
    }

    return(
        <Layout className="layout">
            <InputSalary 
                onChange={"ooo"} 
                placeholder={"Input a number"} 
                title={"Enter your salary"} 
            />
        </Layout>
    )
}

export default ContentPage ;