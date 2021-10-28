import React from 'react'

import { Route,Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Catalog from '../pages/Catalog'
import Contact from '../pages/Contact'
import Accessories from '../pages/Accessories'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/catalog/:slug'  component={Product}/>
            <Route path='/catalog'  component={Catalog}/>
            <Route path='/cart'  component={Cart}/>
            <Route path='/contact'  component={Contact}/>
            <Route path='/accessories'  component={Accessories}/>

        </Switch>
    )
}

export default Routes