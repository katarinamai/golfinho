import React from 'react';
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";
import { Link } from 'react-router-dom';

const { Header } = Layout;
const style = {
    textAlign: 'center',
    backgroundImage: 'linear-gradient(to bottom, #F6BEE5, #D2FEFF)'
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
                    <Link to='/'>
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/calculadora">
                        Calculadora
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to='/sobre'>
                        Sobre
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}

export default HeaderPage;