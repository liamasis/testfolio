'use client';


import { useTheme } from 'next-themes';
import { FC } from 'react'
import { Moon, Sun } from 'lucide-react'

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const { theme, setTheme } = useTheme()
  
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return <button onClick={toggleTheme}>
    {theme === 'dark' ? (
        <Sun className='text-white rotate-0' />
      ) : (
        <Moon className='text-slate rotate-0' />
      )}
  </button>

}

export default ThemeToggle