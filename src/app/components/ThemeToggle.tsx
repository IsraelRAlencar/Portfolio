'use client'

import React, { useEffect, useState } from 'react'
import { Button } from './ui/Button';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const initialTheme = savedTheme || systemTheme;
        
        setTheme(initialTheme);
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <Button
        variant="outline"
        size="sm"
        onClick={toggleTheme}
        className="border-border hover:bg-accent"
        >
        {theme === "light" ? (
            <Moon className="h-4 w-4" />
        ) : (
            <Sun className="h-4 w-4" />
        )}
        </Button>
    );
}
