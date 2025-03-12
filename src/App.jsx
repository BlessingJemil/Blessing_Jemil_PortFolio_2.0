/**
 * @copyright 2025 Blessing Jemil P J
 * @license Apache-2.0
 */

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Skill from "./components/Skill";
import Work from "./components/Work";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
