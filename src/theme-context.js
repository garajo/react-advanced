import React from 'react'

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
  pastel: {
    foreground: '#bae1ff',
    background: '#df8fc5',
  }
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);