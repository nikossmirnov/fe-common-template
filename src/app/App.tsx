
import { classNames, useTheme } from '@/shared/index';
import { Navbar } from '@/widgets/navbar';
import { SideBar } from '@/widgets/sidebar';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {hovered: true}, [theme])}>
            <Navbar />
            <div className='content-page'>
                <SideBar />
                <AppRouter />
            </div>
        </div>
    );
}