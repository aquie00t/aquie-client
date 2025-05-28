export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
      <p className="text-xl text-gray-400 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <a
        href="/"
        className="px-6 py-2 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
      >
        Go Home
      </a>
    </main>
  );
}
