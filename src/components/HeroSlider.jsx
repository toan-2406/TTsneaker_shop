import React, { useState, useEffect , useCallback } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



const HeroSlider = props => {

    const data = props.data

    const setTimeOut = props.timeout ? props.timeout : 3000

    const [activeSlider, setActiveSlider] = useState(0)

    // const NextActiveSlider = () => {
    //     const index = activeSlider + 1 === data.length ? 0 : activeSlider + 1
    //     setActiveSlider(index)
    // }
    const NextActiveSlider = useCallback(
        () => {
            const index = activeSlider + 1 === data.length ? 0 : activeSlider + 1
            setActiveSlider(index)
        },
        [activeSlider, data],
    )
    const PrevActiveSlider = () => {
        const index = activeSlider - 1 <0 ? data.length - 1: activeSlider -1
        setActiveSlider(index)
    }

    useEffect(() => {
        if(props.auto){
            const slideAuto = setInterval(() => {
                NextActiveSlider()
            },setTimeOut)
            return () => {
                clearInterval(slideAuto)
            }
        }
       
    }, [NextActiveSlider,setTimeOut,props])

    return (
        <div className="hero-slider ">
            {
                data.map((item, index) =>(
                    <HeroSliderItem key={index} item={item} active ={index === activeSlider} />
                ))
            }
            {
                props.control ? (
                    <div className="hero-slider__control">
                        <div className="hero-slider__control__name">
                            <span>Colors</span>
                        </div>
                        <div className="hero-slider__control__btn">
                            <div className="hero-slider__control__btn__prev" onClick={PrevActiveSlider}>
                                <i className='bx bx-chevron-left' ></i>
                            </div>
                            <div className="hero-slider__control__btn__color">
{
                                data.map((item, index) =>(
                                    <HeroSliderColors key={index} item={item}  />
                                ))
                            }
                            </div>
                            
                            <div className="hero-slider__control__btn__next" onClick={NextActiveSlider}>
                                <i className='bx bx-chevron-right' ></i>
                            </div>
                        </div>
                        
                        
                    </div>
                ) : null
            }
            <div className="hero-slider__item__btn">
            <Link to='/catalog' >
                <span>Shop now</span> <i className='bx bxs-cart-alt'></i>
            </Link>
        </div>
        </div>
    )
}

HeroSlider.propTypes = {
    data : PropTypes.array.isRequired,
    control : PropTypes.bool,
    auto : PropTypes.bool,
    timeout : PropTypes.number
}

const HeroSliderColors = props => (
    <div className={`hero-slider__control__btn__color__selection bg-${props.item.color}`}  ></div>
)

const HeroSliderItem = props =>(
    
    <div className={`hero-slider__item ${props.active ? "active" : ""}`}>
        <div className="hero-slider__item__info">
            
            <div className="hero-slider__item__info__brand">
                 <span>{props.item.brand}</span>
            </div>
            <div className={`hero-slider__item__info__shoes color-${props.item.color}`}>
                 <span>{props.item.shoes} </span>
            </div>
            <div className="hero-slider__item__info__description">
                 <span>{props.item.description}</span>
            </div>
            <div className="hero-slider__item__info__rating">
                <i className='bx bxs-star' ></i>
                <i className='bx bxs-star' ></i>
                <i className='bx bxs-star' ></i>
                <i className='bx bxs-star' ></i>
                <i className='bx bxs-star' ></i>
            </div>
        </div>
        <div className="hero-slider__item__image image">
            <img src={props.item.image} alt={props.item.brand + props.item.shoes}  />
        </div>
        
    </div>
    
)

export default HeroSlider
