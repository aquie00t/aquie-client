export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} Aquie — Web Developer</p>
      <p className="mt-1 text-xs text-gray-600">
        Built with React & Tailwind CSS
      </p>
    </footer>
  );
}
