import React from 'react';
import { Layout, Row, Col } from 'antd';

const { Header } = Layout;

function HeaderPage() {
    return(
        <Header>
            <Row justify="center">
                <Col span={24}>
                    <h1>Finance</h1>
                </Col>
            </Row>
        </Header>
    )
}

export default HeaderPage;