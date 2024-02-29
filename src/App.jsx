import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ErrorPage from "./pages/ErrorPage";
import { Route, Routes } from "react-router-dom";

import './App.css';
import HomePageWithNavigate from "./pages/HomePageWithNavigate";
import projectsData from "./projects-data.json"


function App() {
  return (
    <div className="App">
      
    <Navbar/>

    <Routes>
      {/* <Route path="/" element={<HomePage />}/> */}
      <Route path="/" element={<HomePageWithNavigate />}></Route>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/projects" element={<ProjectsPage projects={projectsData} />}/>

      <Route path="*" element={ <ErrorPage /> } /> 
    </Routes>

    </div>
  );
}
export default App;
