'use client'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export const AOSProvider = () => {
    
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
      }, [])
    
    if (!mounted) {
        return null
    }

    AOS.init()

    return null
}
