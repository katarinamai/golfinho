import React from 'react';
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";


const { Header } = Layout;
const style = {
    textAlign: 'center',
    backgroundImage: 'linear-gradient(to bottom, #F6BEE5, #D2FEFF)',
    position: "fixed",
    width: '100%',
}
const styleMenu = {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    borderRadius: '0 0 8px 8px'
}

function HeaderPage({nav1, nav2, nav3}) {

    return(
        <Header style={style}>
            <div className="logo" />
            <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={styleMenu}
            >
                <Menu.Item key="1">
                    <a href="#home">
                        {nav1}
                    </a>
                </Menu.Item>
                <Menu.Item key="2">
                    <a href="#calculadora">
                        {nav2}
                    </a>
                </Menu.Item>
                <Menu.Item key="3">
                    <a href="#sobre">
                        {nav3}
                    </a>
                </Menu.Item>
            </Menu>
        </Header>
    )
}

export default HeaderPage;