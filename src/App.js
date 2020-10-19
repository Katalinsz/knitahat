import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ImageSlider from './ImageSlider';
import {StitchesTensionSlider, HatSizeSlider,  AirbnbSlider} from './CustomSlider';
import PatternDescription from './input';

const testData = [
  {name: "Mössa1", image_url: "images/hat4.png", size: "M", description: "PomponHatLongEars"},
  {name: "Mössa2", image_url: "images/hat2.png", description: "SimpleHat"},
  {name: "Mössa3", image_url: "images/hat3.png", description: "SimpleHat"},
  {name: "Mössa3", image_url: "images/hat51.png", description: "PomponHat"},
  {name: "Mössa3", image_url: "images/hat5.png", description: "SantaHat"},
  {name: "Mössa3", image_url: "images/hat1.png", description: "SantaHat"},
];

const ShowHat = props => {
  return (
    <div className="media">
      <img src={props.imageSelected.image_url} className="align-self-start mr-3" alt="Design your hat" />
      <div className="media-body">
        <StitchesTensionSlider></StitchesTensionSlider>
        <HatSizeSlider></HatSizeSlider>
       </div>
    </div>  
  )  
  
};

const ModelsList = props => {
  return (
    <div className="modelslist-row">
      <ImageSlider hats={testData} onClick={props.onClick}/>
      <div>Klick på mössan som du vill handsticka</div>
    </div>  
  )
}


function App() {
  const [imageSelected, setImageSelected] = useState(testData[1]);

  const onHatClick = (item) => {
    console.log("clicked", item); 
    setImageSelected(item);
  }; 

  return (
    <div className="App">
      <ShowHat imageSelected={imageSelected}/>
      <ModelsList onClick={onHatClick}/>
      <PatternDescription item={imageSelected} tension={23} size={56} />
      
    </div>
  );
}

export default App;
