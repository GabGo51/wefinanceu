import { createContext} from "react";
import { useState } from "react";

//Context to keep track of the language selected 
export const SettingContext = createContext(null);
export const SettingProvider = ({ children }) => {
  const [lang, setLang] = useState(true);
  const [open ,setOpen] = useState(false)
  
  return (
    <SettingContext.Provider value={{ lang, setLang, open, setOpen}}>
      {children}
    </SettingContext.Provider>
  );
};
