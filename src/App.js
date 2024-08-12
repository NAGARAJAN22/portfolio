import './App.css';
import Navbar from "./navbar/Navbar";
import ProfileSection from "./sections/ProfileSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectSection from "./sections/ProjectSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
      <div className='App'>
          <Navbar/>
          <div className="section xl:px-20 w-full">
              <ProfileSection/>
              <AboutSection/>
              <ExperienceSection/>
              <ProjectSection/>
              <ContactSection/>
          </div>
      </div>
  );
}

export default App;
