import NavBar from "./Components/NavBar";
import ProfilePic from "./Components/ProfilePic"
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
        <Route path="/" />
        <Route path="about" element="{<About />}" />
      </Routes>


      <ProfilePic />
      <About />

      <Education />

      <Project />

      <Skills />

      <ContactForm />

      <Footer />
    </>
  );
}

export default App;
