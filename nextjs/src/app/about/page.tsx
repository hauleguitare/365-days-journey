// src/app/about/page.tsx
export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-8">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-lg max-w-2xl text-center">
                This is the about page of our Next.js application. You can add your about content here.
            </p>
        </div>
    );
}