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
        <section style={styleSetionBanner}>
            <img src={BannerImg} style={styleBanner}/>
        </section>
    )
}

export default Banner;  