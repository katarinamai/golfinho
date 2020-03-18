import React from 'react';
import { Layout, Row } from 'antd';
import "antd/dist/antd.css";

function FooterPage() {
    const { Footer } = Layout;

    const styleFooter = {
        justify:'end'
    }

    return(
        <Footer>Footer</Footer>
    );
}

export default FooterPage;