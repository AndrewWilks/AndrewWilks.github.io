// eslint-disable-next-line
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import { ScrollDown, ScrollToTop } from "./utils/utils"

// import UnderConstruction from './components/UnderConstruction';
import NotFound from './components/notFound.js';
import NavBar from './utils/utils';

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