// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Build Your Next Project with <span className="text-primary">Modern Tools</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  A powerful starter template with Next.js, shadcn/ui, and dark mode support.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/docs">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="https://github.com/shadcn/ui">GitHub</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-20 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Modern Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Built with Next.js, React, Tailwind CSS, and TypeScript for a powerful developer experience.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="flex items-center gap-1">
                    Learn more <ArrowRightIcon className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Dark Mode</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Seamless dark mode support with next-themes, toggle between light, dark, and system preference.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="flex items-center gap-1">
                    Learn more <ArrowRightIcon className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Responsive Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fully responsive components that work beautifully on mobile, tablet, and desktop devices.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="flex items-center gap-1">
                    Learn more <ArrowRightIcon className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to get started?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Join thousands of developers building modern applications.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" size="lg">
                  <Link href="/docs/installation">Start Building</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t bg-background mt-auto">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col items-center justify-between gap-4 py-10 md:flex-row">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <Image
                  src="/next.svg"
                  alt="Next.js logo"
                  width={100}
                  height={20}
                  className="dark:invert"
              />
              <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                Built with Next.js and shadcn/ui. The source code is available on GitHub.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                Twitter
              </Link>
              <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
                GitHub
              </Link>
            </div>
          </div>
        </footer>
      </div>
  );
}