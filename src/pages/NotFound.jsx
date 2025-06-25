import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Aquie - NotFound";
  }, []);
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-black">
      <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
      <p className="text-xl text-gray-200 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <a
        href="/"
        className="text-white inline-block border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
      >
        Go Home
      </a>
    </main>
  );
}
