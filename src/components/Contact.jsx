const text =
  "If you would like to talk to me about a project or business opportunity, you can reach me at the email address below.";
const email = "aquie00t@icloud.com";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-2xl mx-auto text-center scroll-mt-24"
    >
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p className="text-gray-400 mb-6">{text}</p>

      <p className="text-lg font-mono mb-12 text-white underline underline-offset-4">
        <a href="mailto:aquie00t@icloud.com">{email}</a>
      </p>

      <div className="space-x-6">
        <a
          href="https://github.com/aquie00t"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/irfan-s%C3%B6nmez%C4%B1%C5%9F%C4%B1kl%C4%B1-19372b334/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/aquie00t"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          Twitter
        </a>
      </div>
    </section>
  );
}
