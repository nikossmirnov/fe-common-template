import { FC, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Light;

const ThemeContextProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProp = useMemo(() => {
        return {
            theme,
            setTheme
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={defaultProp}>
            {children}
        </ThemeContext.Provider>
    )
};

export default ThemeContextProvider;