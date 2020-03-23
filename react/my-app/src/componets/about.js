import React from 'react';
import Banner from './banner'; 

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
        <section style={styleDivAbout} id="sobre">
            <a href="#sobre" class="anchor">#</a>
            <h1>
                OI
            </h1>
            <Banner/>
        </section>
    )
}

export default About;