import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Curriculum from './components/Curriculum';
import Contact from './components/Contact';

function App() {
  return (
    <div className="portfolio-container">
      
      {/* 1. 상단 메뉴바 */}
      <Header />

      {/* 2. 메인 인사말 */}
      <Hero />

      {/* 3. 자기소개 */}
      <About />

      {/* 4. Curriculum*/}
       <Curriculum />

      {/* 5. 기술 스택 */}
      <Skills />

      {/* 6. Projects  */}
      <Projects />

      <Contact />
      
    </div>
  );
}

export default App;