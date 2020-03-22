import React from 'react';
import HomeImg from './homeImg';
import { Anchor } from 'antd';

function Home() {
    const styleDiv = {
        //backgroundColor:'whiteSmoke',
        width:'90%',
        display:'flex',
        justifyContent:'center',
        marginTop: '0.5%',
        marginLeft:'5%',
        marginRight:'5%',
        padding:'2%',
        height:'50%'
    }
    const { Link } = Anchor;

    return(
        <div style={styleDiv}>
            <HomeImg/>
        </div>
    )
}

export default Home;