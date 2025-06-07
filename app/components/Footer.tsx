import React from 'react'
import { Github, Linkedin, Mail } from "lucide-react";
import { useSiteInfo } from '../context/SiteInfoContext';

export default function Footer() {
  const siteInfo = useSiteInfo();

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-2">Israel Alencar</h3>
            <p className="text-muted-foreground">Fullstack Developer</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href={siteInfo.github}
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href={siteInfo.linkedin}
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href={`mailto:${siteInfo.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-1">
            Israel Alencar &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
