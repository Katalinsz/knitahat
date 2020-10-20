import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.css';
import './ImageSlider.css'; 

class Model extends React.Component {
  render() {
    return (
      <img src={this.props.image_url} className="media" alt="..." onClick={() => this.props.onClick(this.props.image_url)} />
        
    )
  }
} 


export default function ImageSlider(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, 
    centerMode: true,
    autoplay: false,
    arrows:true,
  };

  let hats = props.hats; 
  console.log("hats: ", hats); 

  return (
    <Slider {...settings}>
      {console.log("here", hats)}
      {hats.map(profile => <Model key={profile.name} {...profile} onClick={() => props.onClick(profile)}>{profile.name}</Model>)}
      
    </Slider>
  );
}