import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SignUpButtons from './components/SignUpButtons';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <SignUpButtons />
      </main>
      <Footer />
    </div>
  );
}

export default App;