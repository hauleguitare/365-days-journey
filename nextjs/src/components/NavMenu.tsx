// src/components/NavMenu.tsx
"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ThemeToggle } from "./ThemeToggle"
import { useNavigation } from "@/hooks/useNavigation";
import {Navigation} from "@/lib/types";

interface ListItemProps extends React.ComponentPropsWithoutRef<typeof Link> {
    title: string;
    children: React.ReactNode;
}

const ListItem = React.forwardRef<
    React.ElementRef<typeof Link>,
    ListItemProps
>(({ className, title, children, ...props }, ref) => {
    // Fix the TypeScript error by explicitly casting props
    const linkProps = props as Omit<React.ComponentPropsWithoutRef<typeof Link>, "className" | "children">;

    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...linkProps}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export function NavMenu() {
    const { data, isLoading, error } = useNavigation();

    // Function to organize navigation items into a tree structure
    const organizeNavigationTree = (items: Navigation[] | undefined) => {
        if (!items) return [];

        // Find all top-level items (items with no parent)
        const topLevel = items.filter(item => !item.parent);

        // For each top-level item, find its children
        return topLevel.map(item => {
            const children = items.filter(child => child.parent?.id === item.id);
            return {
                ...item,
                children
            };
        });
    };

    const navigationTree = organizeNavigationTree(data?.data);

    return (
        <div
            className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
            <div className="flex justify-between items-center w-full py-4 px-4 md:px-6 max-w-7xl mx-auto">
                <div className="flex-1">
                    <Link href="/" className="text-lg font-bold">
                        My Blog
                    </Link>
                </div>
                <NavigationMenu className="flex-1 flex justify-center">
                    <NavigationMenuList>
                        {isLoading ? (
                            <NavigationMenuItem>
                                <span className="px-4 py-2">Loading...</span>
                            </NavigationMenuItem>
                        ) : error ? (
                            <NavigationMenuItem>
                                <span className="px-4 py-2">Error loading navigation</span>
                            </NavigationMenuItem>
                        ) : (
                            <>
                                {navigationTree.map(item => {
                                    // If item has children, create dropdown menu
                                    if (item.children && item.children.length > 0) {
                                        return (
                                            <NavigationMenuItem key={item.id}>
                                                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                        {item.children.map(child => (
                                                            <ListItem
                                                                key={child.id}
                                                                title={child.title}
                                                                href={child.href}
                                                            >
                                                                {child.description || `Explore ${child.title}`}
                                                            </ListItem>
                                                        ))}
                                                    </ul>
                                                </NavigationMenuContent>
                                            </NavigationMenuItem>
                                        );
                                    }

                                    // If item has no children, create a simple link
                                    return (
                                        <NavigationMenuItem key={item.id}>
                                            <NavigationMenuLink asChild>
                                                <Link href={item.href} className={navigationMenuTriggerStyle()}>
                                                    {item.title}
                                                </Link>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    );
                                })}
                            </>
                        )}
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex-1 flex justify-end">
                    <ThemeToggle/>
                </div>
            </div>
        </div>
    );
}