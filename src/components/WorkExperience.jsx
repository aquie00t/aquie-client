const experiences = [
  {
    title: "Game Developer - Grift Game",
    year: "2022",
    description:
      "Collaborated with a small startup-like indie team met on Discord to develop mobile games. Some of the projects were successfully published on the Play Store. Contributed to game logic, development, and team coordination.",
  },
  {
    title: "Backend Developer - Emlak24 (Germany)",
    year: "2024",
    description:
      "Developed a data integration bot that scrapes property listings from various platforms and delivers them to Emlak24's internal API. Collaborated remotely with their in-house software team to ensure seamless compatibility with their system.",
  },
  {
    title: "Freelance Web Developer",
    year: "Various",
    description:
      "Worked as a freelance developer on multiple client projects, delivering clean and functional websites. These were closed-source and not publicly available.",
  },
];

export default function WorkExperience() {
  return (
    <section
      id="work"
      className="min-h-screen flex flex-col justify-center px-6 py-20 max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-10 text-center">Work Experience</h2>
      <ul className="space-y-8">
        {experiences.map((exp, index) => (
          <li key={index}>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-sm text-gray-500">{exp.year}</span>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
            </div>
            <p className="text-gray-400 leading-7">{exp.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
