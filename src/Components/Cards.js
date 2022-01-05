import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import card1 from '../images/card1.jpg'
import card2 from '../images/card2.jpg'
import card3 from '../images/card3.jpg'

function Cards() {
    return (
        <div className='cards'>
            <h1>CHECK US OUT!</h1>
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
    )
}

export default Cards