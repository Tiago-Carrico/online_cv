import React, { createContext, useContext, useState, useEffect } from 'react';
import { siteData } from '../data';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('language');
      if (stored && (stored === 'en' || stored === 'pt')) {
        return stored;
      }
      // Check browser language
      const userLang = navigator.language || navigator.userLanguage; 
      if (userLang.startsWith('pt')) return 'pt';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'pt' : 'en'));
  };

  const content = siteData[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
