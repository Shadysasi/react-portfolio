
import NavBar from "./components/Navbar"
import Bot from "./components/Bot"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import HireMe from "./components/HireMe"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="bg-gray-900 text-gray-100">
      <NavBar/>
      <Bot/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
