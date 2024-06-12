import React from 'react';
import './App.css';
import Header from './components/Header';
import Frame from './components/Frame';
import ContactForm from './components/ContactForm';
import MapComponent from './components/MapComponent';
import AddressComponent from './components/AddressComponent';
import Footer from './components/Footer';
function App() {
  return (
    <div className="container">
      <Header/>
      <Frame/>
      <ContactForm/>
      <MapComponent/>
      <AddressComponent/>
      <Footer/>
     
    </div>
  );
}

export default App;

