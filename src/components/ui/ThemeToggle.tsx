"use client"

import { useState, useEffect } from 'react'
import { useTheme } from "next-themes"
import { IoMoon, IoMoonOutline, IoSunny, IoSunnyOutline } from "react-icons/io5";

export function ThemeToggle() {

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    
    useEffect(() => {
        setMounted(true)
      }, [])
    
    if (!mounted) {
        return null
    }

    const toggleTheme = () => {
        theme === 'light' ? setTheme("dark") : setTheme("light")
    }

    return (
        mounted &&
        <button type="button" className=" transition-all duration-300 ease-in-out" onClick={toggleTheme}>
            {
                theme === 'dark' ? 
                    <IoMoon className="fill-zinc-600 text-2xl"/>
                :
                    <IoMoonOutline className="stroke-zinc-600 text-2xl"/>
            }
        </button>
    )
}
