import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../../app/providers/ThemeContext/ui/ThemeContext';

interface UseThemeResult {
    theme?: Theme;
    toggleTheme?: () => void;
};

//move to the app folder?
export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return { theme, toggleTheme };
};