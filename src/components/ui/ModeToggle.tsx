import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
    const [theme, setThemeState] = React.useState<"light" | "dark" | "system">("light");

    //  Load theme from localStorage on mount
    React.useEffect(() => {
        const stored = localStorage.getItem("theme");
        if (stored === "dark" || stored === "light" || stored === "system") {
            setThemeState(stored);
        } else {
            // If nothing stored, check system preference
            const isDarkMode = document.documentElement.classList.contains("dark");
            setThemeState(isDarkMode ? "dark" : "light");
        }
    }, []);

    // Apply theme and save to localStorage whenever it changes
    React.useEffect(() => {
        const isDark =
            theme === "dark" ||
            (theme === "system" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches);

        document.documentElement.classList[isDark ? "add" : "remove"]("dark");

        // Save to localStorage for astro:swap usage 
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={8}>
                <DropdownMenuItem onClick={() => setThemeState("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setThemeState("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setThemeState("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}