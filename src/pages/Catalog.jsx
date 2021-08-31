import React, { useState } from 'react'

import Helmet from '../components/Helmet'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import productData from '../assets/fake-data/products'
import category from '../assets/fake-data/category'
import CheckBox from '../components/CheckBox'
import colors from '../assets/fake-data/product-colors'
import Size from '../assets/fake-data/product-size'
import Button from '../components/Button'

const Catalog = () => {

    // //Thêm shrink khi cuộn
    // const filtersticky = useRef(null)

    // useEffect(() => {
    //     window.addEventListener("scroll",() => {
    //         if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 100){
    //             filtersticky.current.classList.add("sticky")
    //         }else{
    //             filtersticky.current.classList.remove("sticky")
    //         }
    //     })
    //     return () => {
    //         window.removeEventListener("scroll")
    //     }
    // },[]);

    const initFilter = {
        category : [],
        color : [],
        size : [],
    }

    const productList = productData.getAllProducts()

    const [products,setProducts] = useState(productList)

    const [filter, setFilter] = useState(initFilter)

    const filterSelect = (type, checked, item) => {
        if(checked) {
            switch(type) {
                case "CATEGORY":
                    setFilter({...filter,category: [ ...filter.category, item.categorySlug]})
                    break
            case "CATEGORY":
                    setFilter({...filter,category: [ ...filter.category, item.categorySlug]})
                    break
            case "CATEGORY":
                    setFilter({...filter,category: [ ...filter.category, item.categorySlug]})
                    break
            }
        }
    }

    return (
        <Helmet title="Sản phẩm">
            <div className="catalog">
                <div className="catalog__filter" >
                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            danh mục sản phẩm
                        </div>
                        <div className="catalog__filter__widget__content">
                             {
                                 category.map((item, index) => (
                                    <p key={index} className="catalog__filter__widget__content__item">
                                         <CheckBox
                                         label={item.display}
                                         />
                                    </p>
                                 ))
                             }
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            màu sắc
                        </div>
                        <div className="catalog__filter__widget__content">
                             {
                                 colors.map((item, index) => (
                                    <p key={index} className="catalog__filter__widget__content__item">
                                         <CheckBox
                                         label={item.display}
                                         />
                                    </p>
                                 ))
                             }
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Kích thước
                        </div>
                        <div className="catalog__filter__widget__content">
                             {
                                 Size.map((item, index) => (
                                    <p key={index} className="catalog__filter__widget__content__item">
                                         <CheckBox
                                         label={item.display}
                                         />
                                    </p>
                                 ))
                             }
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__content">
                            <Button size="sm">Xóa bộ lọc</Button>
                        </div>
                    </div>
                </div>
                <div className="catalog__content">
                <Grid
                col={3}
                mdCol={2}
                smCol={1}
                gap={10}
                >
                    {
                        products.map((item, index) => (
                            <ProductCard
                            key={index}
                            img1={item.image01}
                            img2={item.image02}
                            name={item.title}
                            price={Number(item.price)}
                            slug={item.slug}
                            />
                        ))
                    }
                </Grid>
                </div>
            </div>
        </Helmet>
    )
}

export default Catalog
