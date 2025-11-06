import { useState } from 'react';
import { Navbar } from './components/selections/Navbar';
import { MobileMenu } from './components/selections/MobileMenu';
import { Home } from './components/selections/Home';
import { About } from './components/selections/About';
import {Projects} from './components/selections/Project'
import { Contact } from './components/selections/Contact';
import "./index.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
        <div>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
    </>
  );
}

export default App;
