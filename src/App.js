import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ImageSlider from './ImageSlider';
import {StitchesTensionSlider, HatSizeSlider,  AirbnbSlider} from './CustomSlider';
import PatternDescription from './input';
import ImageToggleOnMouseOver from './ImageToggleOnMouseOver'; 

const testData = [
  {name: "Mössa1", image_url: "images/hat4.png", secondary_image_url: "images/hat4S.png", size: "M", description: "PomponHatLongEars"},
  {name: "Mössa2", image_url: "images/hat2.png", secondary_image_url: "images/hat2S.png", description: "SimpleHat"},
  {name: "Mössa3", image_url: "images/hat3.png", secondary_image_url: "images/hat3S.png", description: "SimpleHat"},
  {name: "Mössa3", image_url: "images/hat51.png", secondary_image_url: "images/hat51S.png", description: "PomponHat"},
  {name: "Mössa3", image_url: "images/hat5.png", secondary_image_url: "images/hat5S.png", description: "SantaHat"},
  {name: "Mössa3", image_url: "images/hat1.png", secondary_image_url: "images/hat1S.png", description: "SantaHat"},
];

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hatlength: '',
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

	onSubmit = (event, value) => {
  	event.preventDefault();
    this.props.onSubmit(this.state.hatlength);
    console.log("changed length: ", this.state.hatlength, event, value);
    this.setState({ hatlength: '' });
  };

	render() {
  	return (
      <>
    	<form onSubmit={this.onSubmit}>
    	  <input 
          type="text" 
          pattern="[0-9]*"
          value={this.state.hatlength}
          onChange={event => this.setState({ hatlength: event.target.value })}
          placeholder="15" 
          
        />
        <button>Change length</button>
        <div>Ange eventuelt en egen längd (numeric value only)</div>
      </form>
      
      </>
    );
  }
}

const ShowHat = props => {
  return (
    <div className="media">
      <ImageToggleOnMouseOver 
        primaryImg={props.imageSelected.image_url}
        secondaryImg={props.imageSelected.secondary_image_url}
      />
      <div className="media-body">
        <StitchesTensionSlider 
          stitchesSliderValue = {props.stitchesSliderValue}
          onStitchesSliderChange={props.onStitchesSliderChange}
        ></StitchesTensionSlider>
        <HatSizeSlider
          sizesSliderValue = {props.sizesSliderValue}
          onSizesSliderChange={props.onSizesSliderChange}  
        ></HatSizeSlider>
        <Form onSubmit={props.onSubmit}></Form>
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
  const [valueStitchesSlider, setValueStitchesSlider] = React.useState([20, 23]);
  const [valueSizesSlider, setValueSizesSlider] = React.useState([50]);
  const [hatlength, setStateHatlength] = React.useState(15); 

  const onSubmit=(item) => {
    console.log("onSubmitggggg", item); 
    setStateHatlength(item); 
  }

  const onHatClick = (item) => {
    console.log("clicked", item); 
    setImageSelected(item);
  }; 

  const handleSizesSliderChange = (newValue) => {
    console.log("changing value", newValue); 
    setValueSizesSlider(newValue);
  };

  const handleStitchesSliderChange = ( newValue) => {
    console.log("changing value", newValue); 
    setValueStitchesSlider(newValue);
  };

  return (
    <div className="App">
      <ShowHat 
        imageSelected = {imageSelected} 
        onSubmit={onSubmit}
        onStitchesSliderChange={handleStitchesSliderChange}
        onSizesSliderChange={handleSizesSliderChange}  
      />
      <ModelsList onClick={onHatClick}/>
      <PatternDescription item={imageSelected} tension={valueStitchesSlider} size={valueSizesSlider} length={hatlength} />
      
    </div>
  );
}

export default App;
