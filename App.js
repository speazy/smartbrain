import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 900
      }
    }
  }
}

function App() {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event);
  }

  return (
    <div className="App">
      <Particles className = 'particles'
        params={particlesOptions} 
      />
      <Navigation />  
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange = {onInputChange}/>
     {/*  <FaceRecognition /> */}
     </div>
  );
}

export default App;
