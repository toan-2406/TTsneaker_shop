import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Button from './Button'
import numberWithCommas from '../utils/numberWithCommas'

const ProductCard = props => {
    return (
        <div className="product-card">
            
                <div className="product-card__img">
                    <img src={props.img1} alt="" />
                    <img src={props.img2} alt="" />
                </div>
                <h3 className="product-card__name">
                    {props.name}
                </h3>
                <div className="product-card__price">
                    <span className="product-card__price__new">
                    {numberWithCommas(props.price) }
                    </span>
                    <span className="product-card__price__old">
                        <del>{numberWithCommas(3232132) }</del>
                    </span>
                </div>

            <Link to={`/catalog/${props.slug}`}>
                <div className="product-card__btn">
                    <Button
                    size="sm"
                    icon="bx bx-cart"
                    animation={true}

                    >
                        chọn mua
                    </Button>
                </div>
            </Link>
            
        </div>
    )
}

ProductCard.propTypes = {
    img1: PropTypes.string.isRequired,
    img2: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    
}

export default ProductCard