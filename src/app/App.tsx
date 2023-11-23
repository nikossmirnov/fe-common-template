
import { useTheme } from '@/shared/hooks/useTheme';
import { classNames } from '@/shared/index';
import { Link } from 'react-router-dom';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {hovered: true}, [theme])}>
            <button onClick={toggleTheme}>Change theme</button>
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>
            <AppRouter />
        </div>
    );
}