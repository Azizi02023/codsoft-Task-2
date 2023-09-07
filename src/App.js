import React from 'react';
import Navbar from './components/Navbar/navbar';
import Intro from './components/Navbar/intro';
import Skills from './components/Navbar/skills';
import Work from './components/Navbar/work';
import Contact from './components/Navbar/contact';
import Footer from './components/Navbar/footer';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Intro></Intro>
     <Skills></Skills>
     <Work></Work>
     <Contact></Contact>
     <Footer></Footer>
    </div>
  );
}

export default App;
