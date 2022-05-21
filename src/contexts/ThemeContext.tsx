/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useEffect, useState } from 'react';
import { light, dark } from '@/styles/themes';

type Theme = typeof light;

export const restoreSettings = () => {
  let settings = null;

  try {
    const storedData = window.localStorage.getItem(`theme`);

    if (storedData) {
      settings = JSON.parse(storedData);
    }
  } catch (err) {
    console.error(err);
    // If stored data is not a strigified JSON this will fail,
    // that's why we catch the error
  }

  return settings;
};

export const storeSettings = (settings: Theme) => {
  window.localStorage.setItem(`theme`, JSON.stringify(settings));
};

export interface ContextData {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
  themes: {
    light: Theme;
    dark: Theme;
  };
}

export const ThemeContext = createContext({} as ContextData);

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(light);

  const handleSaveSettings = (update: Theme) => {
    const mergedSettings = update;

    setTheme(mergedSettings);
    storeSettings(mergedSettings);
  };

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setTheme(restoredSettings);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme: handleSaveSettings,
        themes: { light, dark },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
