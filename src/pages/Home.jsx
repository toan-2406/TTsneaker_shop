import React from 'react'

import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import herosliderData from '../assets/fake-data/heroslider'

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

            {/*HeroSlider*/}
            {/*End HeroSlider*/}


            {/*HeroSlider*/}
            {/*End HeroSlider*/}
        </Helmet>
    )
}

export default Home
