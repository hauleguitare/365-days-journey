// src/hooks/useMediaQuery.ts
'use client'

import { useState, useEffect } from 'react';

/**
 * Custom hook that detects if the current viewport matches a media query
 * @param query - The media query to check against
 * @returns Boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
    // Initial state is undefined to avoid hydration mismatch
    const [matches, setMatches] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        // Set mounted state to true
        const updateMatches = () => {
            setMatches(window.matchMedia(query).matches);
        };

        // Initial check
        updateMatches();

        // Create media query list and add listener
        const mediaQueryList = window.matchMedia(query);
        mediaQueryList.addEventListener('change', updateMatches);

        // Cleanup
        return () => {
            mediaQueryList.removeEventListener('change', updateMatches);
        };
    }, [query]);

    // Return false during SSR, actual value after mount
    return matches ?? false;
}

/**
 * Hook to detect if the current device is mobile based on screen width
 * @param breakpoint - The width threshold to consider mobile (default: 768px)
 * @returns Boolean indicating if the device is mobile
 */
export function useIsMobile(breakpoint: number = 768): boolean {
    return useMediaQuery(`(max-width: ${breakpoint}px)`);
}