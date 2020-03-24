import React from 'react';
import Banner from './banner'; 
import {Anchor} from 'antd';
import ScrollableAnchor from 'react-scrollable-anchor'


function About() {

    const styleDivAbout = {
        backgroundColor:'white',
        width:'90%',
        display:'flex',
        marginTop: '0.5%',
        marginLeft:'5%',
        marginRight:'5%',
        padding:'2%',
        marginBottom:'50px',        
        justifyContent:'center',
        flexDirection: 'column',
        alignItems: 'center',
        height:'500px',
    }

    return(
    <ScrollableAnchor id="sobre">
        <section style={styleDivAbout}>
            <Anchor affix={false}>
                <a href="#sobre" className="anchor">#</a>
            </Anchor>
            <h1>
                OI
            </h1>
            <Banner/>
        </section>
    </ScrollableAnchor>
    )
}

export default About;