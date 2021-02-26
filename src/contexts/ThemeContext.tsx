import { createContext, ReactNode, useEffect, useState } from 'react';

interface IThemeProviderContextData {
  toggleTheme: () => void;
  currentTheme: string;
}

interface IThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as IThemeProviderContextData);

export function ThemeProvider({ children }: IThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState('theme-light');

  function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    setCurrentTheme(themeName);
  }

  function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark'){
      setTheme('theme-light');
    } else {
      setTheme('theme-dark');
    }
  }

  useEffect(() => {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
    } else {
      setTheme('theme-light');
    }
  }, []);
  return (
    <ThemeContext.Provider value={{
      toggleTheme,
      currentTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
}
