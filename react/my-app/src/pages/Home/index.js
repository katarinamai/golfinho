import React from 'react';
import HomeImg from '../homeImg';
import Scroll from '../scrolldown';
import {Anchor} from 'antd';
import './styles.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
configureAnchors({offset: -115, scrollDuration: 500});


function Home() {

    return(
        <ScrollableAnchor id="home">
        <section className="div Fade">
            <Anchor affix={false}>
                <a href="#home" className="anchor">#</a>
            </Anchor>
            <h1>
                Calcule o seu orçamento!
            </h1>
            <HomeImg/>
            <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </span>
            <Scroll/>
        </section>
        </ScrollableAnchor>
    )
}

export default Home;