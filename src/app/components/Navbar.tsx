'use client'

import Link from 'next/link';
import React, { use } from 'react'
import ThemeToggle from './ThemeToggle';
import { Button } from './ui/Button';
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const t = useTranslations();
    
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-foreground">
          Israel <span className="text-primary">Alencar</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            {t('nav.about')}
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            {t('nav.skills')}
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            {t('nav.projects')}
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            {t('nav.contact')}
          </button>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
          >
            {t('buttons.hireMe')}
          </Button>
        </div>
      </div>
    </nav>
  )
}
