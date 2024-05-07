'use client'

import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API: any;
  }
}

export const TawkTo = () => {

  useEffect(() => {
    const alreadyPresent = document.getElementById('tawk-script');
    if (alreadyPresent) return;

    const script = document.createElement("script");
    script.id = 'tawk-script';
    script.async = true;
    script.src = "https://embed.tawk.to/651ad85410c0b2572487b684/1hru1elsc";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_API.autoStart = true;

    return () => {
      if (window.Tawk_API) {
        document.body.removeChild(script);
      }
    };

  }, []);

  return null;

};