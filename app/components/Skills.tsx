import { 
  Code2, 
  Layout, 
  Server, 
  Smartphone, 
  Cloud, 
  Shield,
  Database,
  GitBranch,
  Terminal,
  Bug
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: [ "Python", "JavaScript", "TypeScript", "Java", "C++", "PHP", "Kotlin" ],
    },
    {
      title: "Frontend",
      icon: Layout,
      skills: ["React.js", "Next.js", "Tailwind CSS", "HTML/CSS", "Flutter", "React Native"]
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "FastAPI", "Spring Framework", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: ["Flutter", "React Native", "Kotlin", "Android Studio"]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: ["Git", "GitHub Actions", "Docker", "Linux", "CI/CD", "AWS", "Azure"]
    },
    {
      title: "Production Support",
      icon: Shield,
      skills: ["Incident Management", "System Reliability", "Observability", "Log Analysis", "SLA Management", "Runbook Creation"]
    },
    {
      title: "Testing & Quality",
      icon: "🧪",
      skills: ["Playwright", "JUnit", "Mockito", "Cucumber", "Test Automation"],
    },
  ];

  return (
    <section id="skills" className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technical Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise spanning multiple domains
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-400/20 hover:bg-cyan-400/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
