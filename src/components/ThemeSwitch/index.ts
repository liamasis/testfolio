'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

// icons
import { BsSun } from 'react-icons/bs';
import { BsMoonStars } from 'react-icons/bs';
import { BsGear } from 'react-icons/bs';

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return;
};
