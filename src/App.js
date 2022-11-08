
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Project from "./pages/Project"

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/projects' element={<Project/>} />
      <Route path='/contacts' element={<Contact/>} />
    </Routes>
     
    </>
  );
}

export default App;
