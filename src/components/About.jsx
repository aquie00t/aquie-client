const paragraphOne =
  "I'm a backend-focused Web Developer with strong experience in building scalable applications using Fastify, Express, and ASP.NET Core. I write backend logic in TypeScript and JavaScript, working mainly with MongoDB but also comfortable with SQL databases.";

const paragraphTwo =
  "I specialize in designing systems following both monolithic and microservices architectures. Although backend is my primary strength, I'm confident with React and enjoy building clean and minimal user interfaces — especially when it comes to personal or open-source projects.";

const paragraphThree =
  "I love creating and maintaining open-source software. Clean code, performance, and meaningful design are at the core of everything I build.";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 py-20 max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <p className="text-gray-400 leading-7 mb-4">{paragraphOne}</p>
      <p className="text-gray-400 leading-7 mb-4">{paragraphTwo}</p>
      <p className="text-gray-400 leading-7">{paragraphThree}</p>
    </section>
  );
}
