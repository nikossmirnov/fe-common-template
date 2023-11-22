import { Route, Routes } from 'react-router-dom';

import { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import AboutPageAsync from './pages/AboutPage/AboutPage.async';
import MainPageAsync from './pages/MainPage/MainPage.async';
import './styles/index.scss';

export enum Theme {
    Dark = 'dark',
    Light = 'light',
}

export const App = () => {
    const [theme, setTheme] = useState<Theme>(Theme.Dark);

    const handleThemeChange = () => {
        setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);
    };
    return (
        <div className={`app ${theme}`}>
            <button onClick={handleThemeChange}>Change theme</button>
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