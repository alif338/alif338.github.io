import { Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Researchs from "./Research";
import Education from "./Education";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/researchs" element={<Researchs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
