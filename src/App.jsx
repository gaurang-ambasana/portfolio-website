import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProjectInfo from "./components/projects-info/ProjectInfo";
import ContactInfo from "./components/contact-info/ContactInfo";

const App = () => {
  return (
    <>
      <Intro />
      <About />
      <ProjectInfo />
      <ContactInfo />
    </>
  );
};

export default App;
