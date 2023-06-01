// eslint-disable-next-line
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { ScrollDown, ScrollToTop } from "./utils/utils"

// import UnderConstruction from './components/UnderConstruction';
import NotFound from './pages/notFound.js';
import NavBar from './components/navbar.js';

function App() {
  return (
    <div>
      <ScrollToTop />
      <NavBar />
      <ScrollDown />
      <Routes>
        <Route path="" exact element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;