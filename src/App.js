import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SignUpButtons from './components/SignUpButtons';
import Footer from './components/Footer';
import './styles/global.css';
import AboutUs from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
      </main>
        <AboutUs/>
      <Footer />
    </div>
  );
}

export default App;