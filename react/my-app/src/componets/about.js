import React from 'react';

function About() {

    const styleDiv = {
        backgroundColor:'white',
        width:'90%',
        display:'flex',
        marginTop: '0.5%',
        marginLeft:'5%',
        marginRight:'5%',
        padding:'2%',
        height:'100%',
        marginBottom:'50px',
    }

    return(
        <section style={styleDiv} id="sobre">
            <a href="#sobre" class="anchor">#</a>
            <h1>
                OI
            </h1>
        </section>
    )
}

export default About;