import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import BookTable from './pages/BookTable/Booktable';
import About from './pages/About/About';
import { Navbar, Footer } from './components';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Preloader from './components/Preloader/Preloader';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          {loading ? (
            <Preloader />
          ) : (
            <PageTransition />
          )}
        </div>
        <Footer />
      </div>
    </Router>
  );
};

// Page Transition Component
const PageTransition = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <Routes location={location}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/book-a-table" element={<BookTable />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
