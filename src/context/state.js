import {createContext, useContext, useEffect, useState} from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [isDarkMode, changeMode] = useState(false);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) { changeMode(true); }
    }, [])

    return (
        <AppContext.Provider value={{isDarkMode, changeMode}}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}