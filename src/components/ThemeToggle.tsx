'use client';


import { useTheme } from 'next-themes';
import { FC } from 'react'


interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const {setTheme } = useTheme()
  
  return <button onClick={() => setTheme('light')}>fuck</button>
}

export default ThemeToggle