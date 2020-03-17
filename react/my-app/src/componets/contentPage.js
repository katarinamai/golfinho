import React from 'react';
import InputSalary from './inputSalary';
import { Row, Col } from 'antd';

function ContentPage() {
    return(
        <div>
            <Row gutter={[0, 400]}>
                <Col>
                    <InputSalary 
                        onChange={"ooo"} 
                        placeholder={"Input a number"} 
                        title={"Enter your salary"} 
                    />
                </Col>
            </Row>
        </div>
    )
}

export default ContentPage ;