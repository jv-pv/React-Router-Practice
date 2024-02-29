import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ErrorPage from "./pages/ErrorPage";
import HomePageWithNavigate from "./pages/HomePageWithNavigate";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import QueryStringExample from "./pages/QueryStringExample";

import { Route, RouterProvider, Routes } from "react-router-dom";
import projectsData from "./projects-data.json"
import './App.css';


function App() {
  return (
    <div className="App">
      
    <Navbar/>

    <Routes>
      {/* <Route path="/" element={<HomePage />}/> */}
      <Route path="/" element={<HomePageWithNavigate />}></Route>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/projects" element={<ProjectsPage projects={projectsData} />}/>

      <Route path="/projects/:projectId" element={<ProjectDetailsPage projects={projectsData}/>}/>
      <Route path="/example" element={<QueryStringExample />}/>

      <Route path="*" element={ <ErrorPage /> } /> 
    </Routes>

    </div>
  );
}
export default App;
