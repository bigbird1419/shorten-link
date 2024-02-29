import { useState, createContext, useCallback } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const handleToggleDarkMode = useCallback(() => {
        setIsDarkMode(val => !val)
    }, [])

    const val = {
        isDarkMode,
        handleToggleDarkMode
    }

    return (
        <DarkModeContext.Provider value={val}>{children}</DarkModeContext.Provider>
    )
}

export { DarkModeContext, DarkModeProvider }