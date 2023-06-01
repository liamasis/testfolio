'use client';


import { useTheme } from 'next-themes';
import { FC } from 'react'
import { Moon, Sun } from 'lucide-react'

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const { theme, setTheme } = useTheme()
  
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return <button onClick={toggleTheme}>
    {theme === 'light' ? (
        <Moon className='text-black rotate-0' />
      ) : (
        <Sun className='text-white rotate-0' />
      )}
  </button>

}

export default ThemeToggle