
import { classNames, useTheme } from '@/shared/index';
import { Navbar } from '@/widgets/navbar';
import { SideBar } from '@/widgets/sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {hovered: true}, [theme])}>
            <Suspense fallback={''} >
                <Navbar />
                <div className='content-page'>
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}