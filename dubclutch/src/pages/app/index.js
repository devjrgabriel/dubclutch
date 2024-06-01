import React, { useState } from 'react';
import DarkTheme from './DarkTheme.css';
import LightTheme from './LightTheme.css';

export function App() {
   const [isDarkTheme, setIsDarkTheme] = useState(false);

   const toggleTheme = () => {
      setIsDarkTheme(!isDarkTheme);
   };

   return (
      <>
      
      </>
   );
}









