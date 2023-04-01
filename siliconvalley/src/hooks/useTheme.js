import { useState } from "react";
function useTheme(startingTheme= "light") {
    const [theme, setTheme] = useState(startingTheme);

    function validateTheme(theme) {
       if (theme ==="dark"){
           setTheme("dark");
       }
       else
         {
              setTheme("light");
         }
    }

    return {theme, setTheme: validateTheme}
    }
export default useTheme;
