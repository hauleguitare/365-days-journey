'use client'

import * as React from "react"
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Only show the UI after mounting client-side
    React.useEffect(() => {
        setMounted(true)
    }, [])

    // Default icon for server rendering
    if (!mounted) {
        return (
            <button
                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Change theme"
            >
                <ComputerDesktopIcon className="h-5 w-5" />
            </button>
        )
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                    aria-label="Change theme"
                >
                    {theme === 'dark' ? (
                        <MoonIcon className="h-5 w-5" />
                    ) : theme === 'light' ? (
                        <SunIcon className="h-5 w-5" />
                    ) : (
                        <ComputerDesktopIcon className="h-5 w-5" />
                    )}
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                    <SunIcon className="mr-2 h-4 w-4" />
                    <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    <MoonIcon className="mr-2 h-4 w-4" />
                    <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                    <ComputerDesktopIcon className="mr-2 h-4 w-4" />
                    <span>System</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}