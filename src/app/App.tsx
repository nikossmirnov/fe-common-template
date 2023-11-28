
import { useTheme } from '@/shared/hooks/useTheme';
import { classNames } from '@/shared/index';
import { Navbar } from '@/widgets/navbar';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {hovered: true}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>Change theme</button>
        </div>
    );
}