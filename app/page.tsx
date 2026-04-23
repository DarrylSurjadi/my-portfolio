"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <main className="bg-gradient-to-b from-black via-gray-900 to-gray-800">
        <Navbar />
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  );
}
