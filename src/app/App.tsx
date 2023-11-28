
import { classNames, useTheme } from '@/shared/index';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { Navbar } from '@/widgets/navbar';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {hovered: true}, [theme])}>
            <Navbar />
            <AppRouter />
            <ThemeSwitcher />
        </div>
    );
}