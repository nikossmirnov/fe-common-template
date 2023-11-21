import { Route, Routes } from 'react-router-dom';

import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import AboutPageAsync from './pages/AboutPage/AboutPage.async';
import MainPageAsync from './pages/MainPage/MainPage.async';

export const App = () => {
    return (
        <div >
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>
                <Suspense fallback={<div>Loading...</div>} >
            <Routes>

                    <Route path={"/"} element={<MainPageAsync />} />
                    <Route path={"/about"} element={<AboutPageAsync />} />
            </Routes>

                </Suspense>
        </div>
    );
}