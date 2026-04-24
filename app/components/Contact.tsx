import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "darryledwardsurjadi@gmail.com",
      link: "mailto:darryledwardsurjadi@gmail.com",
      color: "hover:border-cyan-400",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/DarrylSurjadi",
      link: "https://github.com/DarrylSurjadi",
      color: "hover:border-cyan-400",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/darryl-surjadi",
      link: "https://linkedin.com/in/darryl-surjadi",
      color: "hover:border-cyan-400",
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Get in Touch */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
            <p className="text-gray-400 mb-8">
              Feel free to reach out to me through any of these platforms. I'm
              always open to discussing new opportunities and collaborations.
            </p>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target={method.icon !== Mail ? "_blank" : undefined}
                  rel={method.icon !== Mail ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-400/50 hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div className="p-3 bg-gray-700/50 rounded-lg group-hover:bg-cyan-400/20 transition-colors">
                    <method.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{method.label}</p>
                    <p className="text-white font-medium">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Send a Message with Container */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a message
            </h3>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
