import React from 'react';
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";

const { Header } = Layout;
const style = {
    textAlign: 'center',
    //border: '1px solid black',
    backgroundColor:'white',
    //color: 'white'
}

function HeaderPage({nav1, nav2}) {
    return(
        <Header style={style}>
            <div className="logo" />
            <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">{nav1}</Menu.Item>
                <Menu.Item key="2">{nav2}</Menu.Item>
            </Menu>
        </Header>
    )
}

export default HeaderPage;