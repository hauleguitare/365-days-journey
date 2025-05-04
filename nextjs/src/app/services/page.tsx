// src/app/services/page.tsx
export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-8">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-lg max-w-2xl text-center">
                This is the services page of our Next.js application. You can list your services here.
            </p>
        </div>
    );
}