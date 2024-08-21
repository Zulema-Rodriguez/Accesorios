import  { createContext, useState } from "react";

export const MenuContext = createContext();

const MenuProvider = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
            {children}
        </MenuContext.Provider>
    );
};

export {MenuProvider, MenuContext};