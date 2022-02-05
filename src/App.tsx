import React from 'react';
import { Navbar } from './components/navbar'
import { ImageGrid } from './components/image-grid'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageGrid />
      Router goes here
    </div>
  );
}

export default App;
