import NavBar from "./Components/NavBar";
import Index from "./Components/Index"
import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import "./styles.css";
import Project from "./Components/Project";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="index" element={<Index />} />

        <Route path="about" element={<About />} />
        <Route path="education" element={<Education />} />
        <Route path="projects" element={<Project />} />
        <Route path="skills" element={<Skills />} />
        <Route path="hireme" element={<ContactForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
