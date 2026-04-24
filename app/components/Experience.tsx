import { Briefcase, Building2, Calendar, MapPin, Clock } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Reliability and Production Engineering (RPE) Analyst",
      company: "Morgan Stanley",
      location: "Hong Kong",
      date: "Feb 2026 - Present",
      type: "Full-time",
      description: [
        "Ensure system reliability and maintain high availability for critical financial services",
        "Manage incident response and resolution for production systems",
        "Collaborate with development teams to improve system observability and monitoring",
        "Participate in on-call rotation for 24/7 production support",
      ],
    },
    {
      id: 2,
      title: "IT Consultant",
      company: "FDM Group",
      location: "Hong Kong",
      date: "Oct 2025 - Present",
      type: "Full-time",
      description: [
        "Completed intensive training in Software Development stream covering Java, Spring Framework, and TDD",
        "Designed and built full-stack fraud detection platform analyzing emails for phishing attempts",
        "Developed frontend with Next.js, TypeScript, and Tailwind CSS",
        "Built RESTful APIs with FastAPI with JWT authentication",
        "Containerized application using Docker with multi-stage builds",
      ],
    },
    {
      id: 3,
      title: "Tech Placement Intern",
      company: "Manulife Investment Management",
      location: "Hong Kong",
      date: "June 2024 - Dec 2024",
      type: "Internship",
      description: [
        "Designed automated regression testing system covering 100+ test cases, reducing testing time by 50%",
        "Utilized Playwright for end-to-end UI testing automation",
        "Implemented BDD with Cucumber/Gherkin framework for reusable test templates",
        "Resolved 300+ security vulnerabilities (CodeQL and GitHub secret scanning)",
      ],
    },
    {
      id: 4,
      title: "R&D Associate Intern",
      company: "PerformVe Limited",
      location: "Hong Kong",
      date: "June 2023 - Aug 2023",
      type: "Internship",
      description: [
        "Led 3-member team to build Assessment 360° - digital employee performance review tool",
        "Built frontend using HTML, CSS, JavaScript and backend with PHP/SQL",
        "Developed VoIP mobile app using Flutter for frontend and Node.js for server-side logic",
        "Implemented WebSocket for real-time device communication",
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4">
            My professional journey across software development and production
            engineering
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 rounded-full"></div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-8">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                  <div
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ring-4 ring-gray-900 shadow-lg ${
                      index === 0 ? "from-cyan-400 to-cyan-300 shadow-cyan-500/20" : 
                      index === 1 ? "from-cyan-400 to-blue-400 shadow-cyan-500/20" :
                      index === 2 ? "from-blue-400 to-indigo-400 shadow-blue-500/20" :
                      "from-purple-500 to-purple-400 shadow-purple-500/20"
                    }`}
                  >
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 hover:scale-[1.02] transition-all duration-300 ml-4">
                  {/* Row 1: Role Title + Type Tag */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Briefcase className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        exp.type === "Full-time"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>

                  {/* Row 2: Company */}
                  <div className="flex items-center gap-2 mb-2 ml-7">
                    <Building2 className="w-4 h-4 text-sky-400" />
                    <span className="text-sky-400 font-medium">
                      {exp.company}
                    </span>
                  </div>

                  {/* Row 3: Date and Location */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 ml-7">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Row 4: Bullet Points */}
                  <ul className="space-y-2 ml-7">
                    {exp.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-gray-300 text-sm flex items-start gap-2"
                      >
                        <span className="text-cyan-400 mt-0.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
