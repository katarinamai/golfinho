import React from 'react';
import { Layout, Row } from 'antd';
import "antd/dist/antd.css";

function FooterPage() {
    const { Footer } = Layout;

    const styleFooter = {
        position: 'fixed',
        bottom:0,
        width:'100%',
        boxShadow: '0 1px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s'
    }

    return(
        <Footer style={styleFooter}>Footer</Footer>
    );
}

export default FooterPage;