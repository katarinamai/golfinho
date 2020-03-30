import React from 'react';
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";

const { Header } = Layout;
const style = {
    textAlign: 'center',
    backgroundImage: 'linear-gradient(to bottom, #F6BEE5, #D2FEFF)',
    position: 'fixed',
    top: 0,
    zIndex: 9,
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
                id="menu"
            >
                <Menu.Item key="home">
                    <a href="#home" className="anchor">
                        {nav1}
                    </a>
                </Menu.Item>
                <Menu.Item key="calculadora">
                    <a href="#calculadora" className="anchor">
                        {nav2}
                    </a>
                </Menu.Item>
                <Menu.Item key="sobre">
                    <a href="#sobre" className="anchor">
                        {nav3}
                    </a>
                </Menu.Item>
            </Menu>
        </Header>
    )
}

export default HeaderPage;