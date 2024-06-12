import React from 'react';
import './App.css';
import Header from './components/Header';
import Frame from './components/Frame';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="container">
      <Header/>
      <Frame/>
      <ContactForm/>
    </div>
  );
}

export default App;

