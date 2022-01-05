import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import woman from '../../images/woman.jpg';
import './Home.css'

function Home (){
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 1,
        rootMargin:"0px 0px  100px 0px"

    };

    const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll) {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    })
    
    return(
        <>
        <div className='home'>
            <HeroSection />
            <div className ='fade-in' ref = {faders}>
                <Cards/>
            </div>
                <div className="mid-home">
                    <div className='home-content'>
                        <div className='home-me-p'>
                        <h1>HERE ARE SOME THINGS ABOUT US!</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia 
                                rerum sunt dolor fugit vero eos eveniet beatae maxime esse nisi sed 
                                saepe voluptatum, labore numquam. Recusandae, autem consectetur! Reprehenderit 
                                temporibus doloremque ipsa culpa obcaecati aut quibusdam distinctio perferendis 
                                incidunt ratione facilis porro minima tempore nisi necessitatibus dolorem, vitae 
                                repudiandae nesciunt!
                            </p>
                        </div>
                        <img className ='image-home' src={woman} alt='Man'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;