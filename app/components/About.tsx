import {
  GraduationCap,
  Briefcase,
  Heart,
  Calendar,
  MapPin,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
          {/* Left Column - Bio Text */}
          <div>
            <p className="text-gray-300 text-lg mb-6">
              I'm a{" "}
              <span className="text-cyan-400 font-semibold">
                Computer Engineering graduate from HKUST
              </span>{" "}
              with a passion for building reliable systems and bridging the gap
              between development and operations.
            </p>

            <p className="text-gray-300 text-lg mb-6">
              Currently working as a{" "}
              <span className="text-cyan-400 font-semibold">
                Production Support Analyst at Morgan Stanley
              </span>
              , where I ensure system reliability and maintain high availability
              for critical financial services.
            </p>

            <p className="text-gray-300 text-lg mb-6">
              My experience spans{" "}
              <span className="text-cyan-400 font-semibold">
                full-stack development, test automation, and cloud
                infrastructure
              </span>
              . I've built fraud detection systems, automated regression testing
              frameworks, and developed mobile applications used by real users.
            </p>

            <p className="text-gray-300 text-lg">
              I'm constantly learning and exploring new technologies. Outside of
              coding, I enjoy contributing to open source and solving complex
              engineering challenges.
            </p>
          </div>
          {/* Right Column - Info Cards */}
          <div className="space-y-4">
            {/* Education Card */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-7 h-7 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <p className="text-cyan-400 font-semibold">
                Hong Kong University of Science and Technology (HKUST)
              </p>
              <p className="text-sky-400 font-medium mb-2">BEng in Computer Engineering</p>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                <Calendar className="w-4 h-4" />
                <span>Sept 2021 - July 2025</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Hong Kong</span>
              </div>
            </div>

            {/* Current Role Card - Option A */}
            {/* Current Role Card */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-7 h-7 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">Current Role</h3>
              </div>
              <p className="text-cyan-400 font-semibold"> Reliability and Production Engineering (RPE) Analyst </p>
              <p className="text-sky-400 font-medium mb-2"> Morgan Stanley </p>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <Calendar className="w-4 h-4" />
                <span>Feb 2026 - Present</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs">
                  Production Support
                </span>
                <span className="px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs">
                  System Reliability
                </span>
                <span className="px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs">
                  Application Monitoring
                </span>
                <span className="px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs">
                  Incident Management
                </span>
                <span className="px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs">
                  Root Cause Analysis
                </span>
                <span className="px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs">
                  Stakeholder Communication
                </span>
              </div>
            </div>

            {/* Passion Card */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-7 h-7 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">Passion</h3>
              </div>
              <p className="text-gray-400 text-base">
                Passionate about learning new technologies and building
                innovative solutions to solve complex software challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
