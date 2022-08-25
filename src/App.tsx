import React, {useState} from 'react';
import './App.css';

import NavBar from './Components/NavBar/Navbar';
import Header from './Components/Header/Header';
import WhyTivity from './Components/WhyTivity/WhyTivity';
import BlueBox from './Components/BlueBox/BlueBox';
import HowWorks from './Components/HowWorks/HowWorks';
import Footer from './Components/Footer/Foter';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const setMenu = (menu:boolean) => {
    setMenuOpen(menu)
  }

  return (
    <>
    <NavBar menuOpen={menuOpen} setMenuOpen={setMenu} />
    {menuOpen && (
          <div className="menuOverlay">
            <div className="menuBtn">Join Discord</div>
          </div>
        )}
    <main>
     <Header />
     <WhyTivity />
     <BlueBox />
     <HowWorks />
    </main>
    <Footer />
    </>
  );
}

export default App;
