import React, { useContext} from "react";
import {ThemeProvider, ThemeContext} from "../Context/ThemeContext";


function Layout ({startTheme, children}) {
    return (
        <ThemeProvider startTheme={startTheme}>
            <LayoutNoThemeProvider>
            {children}
            </LayoutNoThemeProvider>
        </ThemeProvider>

    )
}

function LayoutNoThemeProvider ({children}) {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={theme=== "light" ? "container-fluid light" : "container-fluid dark"}>
            {children}
        </div>
    )
}
export default Layout;
