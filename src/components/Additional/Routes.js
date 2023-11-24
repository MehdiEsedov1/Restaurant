import React from 'react';
import Home from '../Home.js';
import Menu from '../Menu.js';
import About from '../About.js';
import Basket from '../Basket.js';
import AboutMeal from '../AboutMeal.js';

import Error from './Error.js';

import SignUp from '../Registration/SignUp.js';
import LogIn from '../Registration/LogIn.js';
import Profile from '../Profile.js';

import Pizza_Burger from '../MenuInner/Pizza-Burger.js';
import Drinks from '../MenuInner/Drinks.js';
import Souce_salad from '../MenuInner/Souce-salad.js';

import Burger from '../MenuInner/Burger.js';
import Dessert from '../MenuInner/Dessert.js';
import Pizza from '../MenuInner/Pizza.js';
import Salad from '../MenuInner/Salad.js';
import Souce from '../MenuInner/Souce.js';

import { Route, Routes } from 'react-router-dom';
import Payment from '../Registration/Payment.js';
import Faq from '../Faq.js';

export default function Routess() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menu'>
                    <Route index element={<Menu />} />
                    <Route path='dessert' >
                        <Route index element={<Dessert />} />
                    </Route>
                    <Route path='pizza-Burger'>
                        <Route index element={<Pizza_Burger />} />
                        <Route path='pizza' element={<Pizza />} />
                        <Route path='burger' element={<Burger />} />
                    </Route>
                    <Route path='drinks'>
                        <Route index element={<Drinks />} />
                    </Route>
                    <Route path='saucesalad'>
                        <Route index element={<Souce_salad />} />
                        <Route path='souce' element={<Souce />} />
                        <Route path='salad' element={<Salad />} />
                    </Route>
                    <Route path=':mID' element={<AboutMeal />} />
                </Route>
                <Route path='/about' element={<About />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/basket'  >
                    <Route index element={<Basket />} />
                    <Route path='payment' element={<Payment />} />
                </Route>
                <Route path='/signup' element={<SignUp />} />
                <Route path='/login' element={<LogIn />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </div>
    )
}