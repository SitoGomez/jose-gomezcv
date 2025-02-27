import { motion } from "framer-motion";

const experiences = [
  {
    title: "Typescript fullstack developer (80/20 NodeJS/React)",
    company: "Qualifyze",
    period: "November 2023 - Present",
    description:
      "NestJS Backend design and development following outside-in with jest (Hexagonal + DDD) in a fast changing environment. Also, I use mutant testing with stryker to enhance the code coverage. US's leadership and coordination. MongoDB (Read layer), Postgres and DynamoDB. Events implementation using rabbitMQ and nest event bus. Daily production deployments and monitored using Datadog. Pair programming and code reviews as main tools in my daily basis",
  },
  {
    title: "NodeJS Developer (Typescript)",
    company: "Plexus tech",
    period: "June 2022 - November 2023",
    description:
      "Two different projects: NestJS Backend design and development using hexagonal architecture (with DDD) with typescript, following SOLID, typeorm (Postgres), MongoDB (aggregation pipeline). I also work using factory pattern, strategy pattern, decorator pattern, jest for unit testing and supertest for e2e. A bit of redis using Redis Json and implementing pessimist caching strategy",
  },
  {
    title: "NodeJS Developer",
    company: "Concatel - WeLocalize",
    period: "September 2021 - June 2022",
    description:
      "Backend development in an onion architecture project with NodeJS and Postgres (with ORM), Jest unit testing and e2e with supertest.",
  },
  {
    title: "NodeJS Developer",
    company: "Everis Centers",
    period: "November 2019 - September 2021",
    description:
      "Backend development with NodeJS and MySQL (Using ORM and raw queries) mainly. Also managing client requirements, sprint plannings, task distribution and mentoring colleagues and leading the technical team at the end (5 including me at that moment).",
  },
  {
    title: "NodeJS Developer",
    company: "ProWeSe",
    period: "July 2019 - October 2019",
    description:
      "Design and development of a NodeJS backend using MongoDB with mongoose and cheerio. Left due to non-payment of salary.",
  },
  {
    title: "NodeJS Developer",
    company: "The global password",
    period: "March 2018 - July 2019",
    description:
      "Design and development of a NodeJS backend for the R&D department with socket.io and some third API's integrations.",
  },
];

const Experience = () => {
  return (
    <div className="relative" style={{ marginBottom: "90px" }}>
      <span className="inline-block px-3 py-1 text-sm font-mono tracking-wider bg-cyan-500/10 rounded-full mb-8 border border-cyan-500/20">
        WORK EXPERIENCE
      </span>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-6 border-l-2 border-sky-400 hover:border-violet-400 transition-colors duration-300"
          >
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-cyan-500/20 border-2 border-cyan-500/40" />
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
              <p className="text-sm font-mono text-white mb-2">
                {exp.company} • {exp.period}
              </p>
              <p className="text-gray-200">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
