import { useState } from "react";
import { Hero } from "./sections/Hero";
import { Navbar } from "./layout/Navbar";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import Footer from "./layout/Footer";

function App() {
  const [showContact, setShowContact] = useState(false);

  const handleOpenContact = () => {
    setShowContact(true);
    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar onContactClick={handleOpenContact} />
      <main>
        <Hero onContactClick={handleOpenContact} />
        <About />
        <Projects />
        {showContact && <Contact />}
      </main>
       <Footer />
    </div>
  );
}

export default App;
