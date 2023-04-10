/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      background: '#FDFDFD',
      primary: {
        lighter: '#5045c4',
        main: '#2417b5',
        darker: '#1d1291',
      },
      secondary: {
        lighter: '#c44d50',
        main: '#b52124',
        darker: '#911a1d',
      },
      accent: {
        lighter: '#3f7d49',
        main: '#0f5d1c',
        darker: '#0c4a16',
      },
    },

    fontFamily: {
      sans: ['var(--font-montserrat)'],
      serif: ['var(--font-lora)'],
    },
    fontSize: {
      xs: ['0.75rem', {lineHeight: '1rem'}],
      sm: ['0.875rem', {lineHeight: '1.25rem'}],
      base: ['1rem', {lineHeight: '1.5rem'}],
      lg: ['1.125rem', {lineHeight: '1.75rem'}],
      xl: ['1.25rem', {lineHeight: '1.75rem'}],
      '2xl': ['1.5rem', {lineHeight: '2rem'}],
      '3xl': ['1.875rem', {lineHeight: '2.25rem'}],
      '4xl': ['2.25rem', {lineHeight: '2.5rem'}],
      '5xl': ['3rem', {lineHeight: '1.35'}],
      '6xl': ['3.75rem', {lineHeight: '1.35'}],
      '7xl': ['4.5rem', {lineHeight: '1.35'}],
      '8xl': ['6rem', {lineHeight: '1.35'}],
      '9xl': ['8rem', {lineHeight: '1.35'}],
    },
    extend: {
      textColor: {
        'on-background': '#212121',
        'on-primary': '#c9c9dd',
        'on-secondary': '#e5efcf',
        'on-accent': '#dff1ba',
      },
    },
  },
};
