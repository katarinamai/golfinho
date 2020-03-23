import React from 'react';
import BannerImg from '../img/banner.png';

function Banner() {

    const styleBanner = {
        width:'468px',
        height:'60px',
    }
    const styleSetionBanner = {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
    return(
        <section style={styleSetionBanner} className="banner">
            <img src={BannerImg} style={styleBanner} className="banner"/>
        </section>
    )
}

export default Banner;  