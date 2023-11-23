import { Route, Routes } from 'react-router-dom';

import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import AboutPageAsync from './pages/AboutPage/AboutPage.async';
import MainPageAsync from './pages/MainPage/MainPage.async';
import './styles/index.scss';



export const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Change theme</button>
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