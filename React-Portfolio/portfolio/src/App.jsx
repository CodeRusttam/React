import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import About from "./components/About/About";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from './components/contact/Contact'
import Menu from "./components/menu/Menu";
import { useState } from "react";
import './app.scss'
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="section">
        <Intro />
        <About />
        <Portfolio  />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
