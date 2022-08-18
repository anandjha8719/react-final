import { createContext, useState } from 'react';

export const HomeContext = createContext({
    currentText: '',
    setCurrentText: () => ''
});

export const HomeProvider = ({children}) => {
    const [currentText, setCurrentText] = useState('');
    const value = { currentText, setCurrentText };

    return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>
}