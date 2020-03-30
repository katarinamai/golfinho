import React from 'react';
import Banner from '../../components/Banner'; 
import './styles.css';
import {Anchor} from 'antd';
import ScrollableAnchor from 'react-scrollable-anchor'


function About() {

    return(
    <ScrollableAnchor id="sobre">
        <section className="div">
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