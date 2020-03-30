import React from 'react';
import ReactBodyMovin from 'react-bodymovin';
import ImgHome2 from '../assets/home_img.json';

function HomeImg(){
    const bodyMovinOptions = {
        loop: true,
        autoplay: true,
        prerender: true,
        animationData: ImgHome2,
    };
    return(
        <div style={{width:'60%'}}>
            <ReactBodyMovin options={bodyMovinOptions}/>
        </div>
    )
}

export default HomeImg;