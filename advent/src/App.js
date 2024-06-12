import React from 'react';
import './App.css';
import Header from './components/Header';
import Frame from './components/Frame';
import ContactForm from './components/ContactForm';
import MapComponent from './components/MapComponent';
function App() {
  return (
    <div className="container">
      <Header/>
      <Frame/>
      <ContactForm/>
      <MapComponent/>
    </div>
  );
}

export default App;

