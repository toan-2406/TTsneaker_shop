import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import herosliderData from '../assets/fake-data/heroslider'
import Section, {SectionTitle,SectionBody} from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import policy from '../assets/fake-data/policy'
import Grid from '../components/Grid'
import productData from '../assets/fake-data/products'
import ProductCard from '../components/ProductCard'
import bannersale from '../assets/images/bannersale.jpg'

const Home = () => {
    return (
        <Helmet title="Trang chủ">
            {/*HeroSlider*/}
            <HeroSlider data={herosliderData}
            control={true} 
            auto = {true} 
            timeout = {6000}
            />
            {/*End HeroSlider*/}

            {/*Policy Section*/}
            <Section>
                
                    <SectionBody>
                        <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                        >
                            {
                                policy.map((item,index) => <Link key={index} to="/policy">
                                <PolicyCard
                                
                                name={item.name}
                                description={item.description}
                                icon={item.icon}
                                />
                                </Link>)
                            }
                        </Grid>
                    </SectionBody>
                
                
            </Section>
            {/*End Policy Section*/}


            {/*Best Sell*/}
            <Section>
                <SectionTitle>
                    top sản phẩm bán chạy trong tuần
                </SectionTitle>
                <SectionBody>
                    <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={20}
                    >
                        {
                            productData.getProducts(4).map((item, index) => (
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
                </SectionBody>
            </Section>
            {/*End Best Sell*/}
            
            {/*New Product*/}
            <Section>
                <SectionTitle>
                    sản phẩm mới
                </SectionTitle>
                <SectionBody>
                    <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={20}
                    >
                        {
                            productData.getProducts(8).map((item, index) => (
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
                </SectionBody>
            </Section>
            {/*End New Product*/}
            {/*Banner Sale*/}
                <Section>
                    <SectionBody>
                        <Link to="/catalog">
                            <img src={bannersale} alt="" />
                        </Link>
                    </SectionBody>
                </Section>
            {/*End Banner Sale*/}

            {/*Popular Product*/}
            <Section>
                <SectionTitle>
                    sản phẩm phổ biến
                </SectionTitle>
                <SectionBody>
                    <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={20}
                    >
                        {
                            productData.getProducts(12).map((item, index) => (
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
                </SectionBody>
            </Section>
            {/*End Popular Product*/}
        </Helmet>
    )
}

export default Home
