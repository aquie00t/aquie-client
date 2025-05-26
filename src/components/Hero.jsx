//https://github.com/aquie00t
//https://x.com/aquie00t
//https://www.linkedin.com/in/irfan-s%C3%B6nmez%C4%B1%C5%9F%C4%B1kl%C4%B1-19372b334

import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const text =
  "Backend-focused Web Developer crafting fast, scalable systems — and clean UIs when needed.";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center py-20 px-4"
      id="home"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hey, I'm Aquie.
        <br />
        Web Developer.
      </h1>
      <p className="text-lg text-gray-400 mb-8">{text}</p>
      <a
        href="#projects"
        className="inline-block border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
      >
        View Projects
      </a>
      <div className="flex justify-center gap-6 mt-10 text-2xl">
        <a
          href="https://github.com/aquie00t"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/aquie00t"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/irfan-s%C3%B6nmez%C4%B1%C5%9F%C4%B1kl%C4%B1-19372b334"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
