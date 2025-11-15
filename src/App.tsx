import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Test from './pages/Test';
import Footer from './components/Footer';
import InteractiveNet from './components/InteractiveNet';

function App() {
  return (
    <Router>
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
        {/*<VantaBackground />*/}
        <InteractiveNet />
        <div className="layout-container flex h-full grow flex-col relative z-10">
          <div className="px-6 sm:px-10 md:px-24 lg:px-48 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/test" element={<Test />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

