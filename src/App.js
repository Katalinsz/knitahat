import React, { useState } from 'react';
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

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hatLenght: '',
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

	onSubmit = (event, value) => {
  	event.preventDefault();
    this.props.onSubmit(this.state.hatLenght);
    console.log("changed length: ", this.state.hatLenght, event, value);
    this.setState({ hatLenght: '' });
  };

	render() {
  	return (
      <>
    	<form onSubmit={this.onSubmit}>
    	  <input 
          type="text" 
          pattern="[0-9]*"
          value={this.state.hatLenght}
          onChange={event => this.setState({ hatLenght: event.target.value })}
          placeholder="15" 
          
        />
        <button>Change Lenght</button>
        <div>Ange eventuelt en egen längd (numeric value only)</div>
      </form>
      
      </>
    );
  }
}

const ShowHat = props => {
  return (
    <div className="media">
      <img src={props.imageSelected.image_url} className="align-self-start mr-3" alt="Design your hat" />
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
  
  const onSubmit=(item) => {
    console.log("onSubmitggggg", item); 
  }

  const onHatClick = (item) => {
    console.log("clicked", item); 
    setImageSelected(item);
  }; 

  const handleSizesSliderChange = (newValue) => {
    console.log("changing value", newValue); 
   // setValueSizesSlider(newValue);
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
        stitchesSliderValue = {valueStitchesSlider}
        sizesSliderValue = {valueSizesSlider}
        onStitchesSliderChange={handleStitchesSliderChange}
        onSizesSliderChange={handleSizesSliderChange}  
      />
      <ModelsList onClick={onHatClick}/>
      <PatternDescription item={imageSelected} tension={23} size={56} />
      
    </div>
  );
}

export default App;
