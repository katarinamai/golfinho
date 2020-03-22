import React from 'react';
import HomeImg from './homeImg';
import Scroll from './scrolldown';

function Home() {
    const styleDiv = {
        //backgroundColor:'whiteSmoke',
        width:'90%',
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '0.5%',
        marginLeft:'5%',
        marginRight:'5%',
        padding:'2%',
        justifyContent: 'space-between',
        height:'100%',
    }

    return(
        <section style={styleDiv} id="home">
            <a href="#home" class="anchor">#</a>
            <h1>
                Calcule o seu orçamento!
            </h1>
            <HomeImg/>
            <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </span>
            <Scroll/>
        </section>
    )
}

export default Home;