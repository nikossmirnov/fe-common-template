import { Route, Routes } from 'react-router-dom';

import { Link } from 'react-router-dom';
import './index.scss';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { MainPage } from './pages/MainPage/MainPage';
export const App = () => {
    return (
        <div >
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>
            <Routes>
                <Route path={"/"} element={<MainPage />} />
                <Route path={"/about"} element={<AboutPage />} />
            </Routes>
        </div>
    );
}