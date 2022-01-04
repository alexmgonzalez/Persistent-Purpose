import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import card1 from '../images/card1.jpg'
import card2 from '../images/card2.jpg'
import card3 from '../images/card3.jpg'

function Cards() {
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

    return (
        <div className='cards'>
            <h1>CHECK US OUT!</h1>
            <div className ='fade-in' ref = {faders}>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem 
                                src = {card1}
                                text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, possimus."
                                label='Lorem'
                                path='/'
                            />
                            <CardItem 
                                src = {card2}
                                text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, possimus."
                                label='Lorem'
                                path='/'
                            />
                            <CardItem 
                                src = {card3}
                                text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, possimus."
                                label='Lorem'
                                path='/'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards