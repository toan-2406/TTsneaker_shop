import React, { useState,useEffect,useCallback,useRef } from 'react'

import Helmet from '../components/Helmet'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import productData from '../assets/fake-data/products'
import category from '../assets/fake-data/category'
import CheckBox from '../components/CheckBox'
import colors from '../assets/fake-data/product-colors'
import Size from '../assets/fake-data/product-size'
import Button from '../components/Button'
import InfinityList from '../components/InfinityList'

const Catalog = () => {

    const initFilter = {
        category : [],
        color : [],
        size : [],
    }

    const productList = productData.getAllProducts()

    const [products,setProducts] = useState(productList)

    const [filter, setFilter] = useState(initFilter)
    //update sản phẩm sau lọc
    const updateProduct = useCallback(
        () => {
            let temp = productList;

            if(filter.category.length > 0 ){
               temp = temp.filter(e => filter.category.includes(e.categorySlug))
            }
            if(filter.color.length > 0){
               temp = temp.filter(e => {
                    const check = e.colors.find(color => filter.color.includes(color))
                    return check !== undefined 
               })
            }
            if(filter.size.length > 0){
               temp = temp.filter(e => {
                    const check = e.size.find(size => filter.size.includes(size))
                    return check !== undefined 
               })
            }
            setProducts(temp)
        },
        [filter, productList],
    )

    useEffect(() => {
        updateProduct()
    }, [updateProduct])
    //Lọc sản phẩm
    const filterSelect = (type, checked, item) => {
        if(checked) {
            switch(type) {
                case "CATEGORY":
                        setFilter({...filter,category: [ ...filter.category, item.categorySlug]})
                        break
                case "COLOR":
                        setFilter({...filter,color: [ ...filter.color, item.color]})
                        break
                case "SIZE":
                        setFilter({...filter,size: [ ...filter.size, item.size]})
                        break
                default:
            }
        }else{
            switch(type) {
               case "CATEGORY":
                        const newCategory = filter.category.filter(e => e !== item.categorySlug)
                        setFilter({...filter,category: newCategory})
                        break
                case "COLOR":
                        const newColor = filter.color.filter(e => e !== item.color )
                        setFilter({...filter,color:newColor})
                        break
                case "SIZE":
                        const newSize = filter.size.filter(e => e !== item.size )
                        setFilter({...filter,size:newSize})
                        break
                default:
            }
        }
        
    }
    //xóa bộ lọc
    const clearFilter = () => setFilter(initFilter)

    const filterRef = useRef(null);

    //show/hide button
    const showHide = () => {
        filterRef.current.classList.add('active')
    } 

    const  removeFilter = () => filterRef.current.classList.remove('active')

    return (
        <Helmet title="Sản phẩm">
            <div className="catalog">
                <div className="catalog__filter" ref={filterRef} >
                    <div className="catalog__filter__close" onClick={() => removeFilter()} ><i class='bx bx-left-arrow-alt' ></i></div>
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
                                         onChange = {(input) => filterSelect("CATEGORY", input.checked,item)}
                                         checked={filter.category.includes(item.categorySlug)}
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
                                         onChange = {(input) => filterSelect("COLOR", input.checked,item)}
                                         checked={filter.color.includes(item.color)}
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
                                         onChange = {(input) => filterSelect("SIZE", input.checked,item)}
                                         checked={filter.size.includes(item.size)}
                                         />
                                    </p>
                                 ))
                             }
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__content">
                            <Button size="sm" onClick={() => clearFilter()}>Xóa bộ lọc</Button>
                        </div>
                    </div>
                </div>
                <div className="catalog__filter__toggle">
                    <Button onClick={showHide} size='sm'>bộ lọc</Button>
                </div>
                <div className="catalog__content">
                <InfinityList
                data={products}/>
                </div>
            </div>
        </Helmet>
    )
}

export default Catalog
