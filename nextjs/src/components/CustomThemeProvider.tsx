'use client'

import {ThemeProvider as NextThemesProvider, ThemeProviderProps} from 'next-themes'
import React from "react";

export function CustomThemeProvider({
                                  children,
                                  ...props
                              }: React.ComponentProps<typeof NextThemesProvider>) {
    //@ts-ignore
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}