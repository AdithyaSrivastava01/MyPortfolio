
import './App.scss';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Project from './components/Project'
// import Dashboard from './components/Dashboard'

function App() {
  return (
    <>
    <Routes>
    <Route path="/MyPortfolio" element={<Layout />}>
           <Route path="/MyPortfolio" element={<Home />} />
          <Route path="/MyPortfolio/about" element={<About />} />
          <Route path="/MyPortfolio/contact" element={<Contact />} />
          <Route path="/MyPortfolio/project" element={<Project />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />  */}
    </Route>
    </Routes>
    {/* <Home/> */}
    </>
  );
}

export default App;
