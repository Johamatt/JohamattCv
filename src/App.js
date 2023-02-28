import React from "react";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Education from "./pages/Skills";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}
