import { ThemeProvider } from './context/ThemeProvider';
import initSections, { SECTIONSCOUNT } from './scripts/initSections';
import useScroll from './hooks/useScroll';
import { useState } from 'react';

import Main from './components/layout/Main/Main';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

import './App.css';
import './Animations.css';

function App() {
  const {
    refs,
    scrollHandle
  } = useScroll(SECTIONSCOUNT);
  const [sections] = useState(initSections(refs));

  return (
    <ThemeProvider>
      <Header
        sections={sections}
        scrollHandle={scrollHandle}
      />
      <Main
        sections={sections}
      />
      <Footer />
    </ThemeProvider>
  );
};

export default App;