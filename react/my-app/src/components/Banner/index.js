import React from 'react';
import BannerImg from '../../assets/banner.png';
import './styles.css';

function Banner() {

    return(
        <section className="styleSetionBanner banner">
            <img src={BannerImg} className="styleBanner banner"/>
        </section>
    )
}

export default Banner;  