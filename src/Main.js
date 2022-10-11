

import {Routes, Route} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Project from './components/Project'
// import Dashboard from './components/Dashboard'

function App() {
  return (
    <div>
      <Layout/>
    <Routes>
    {/* <Route  path="/MyPortfolio" element={<Layout />} /> */}

           <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          
    </Routes>
    
    </div>
  );
}

export default App;
