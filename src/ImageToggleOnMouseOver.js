import React, {useRef} from "react"; 

const ImageTogglerOnMouseOver = ({ primaryImg, secondaryImg }) => {

    const imageRef = useRef(null); 

    return (
        <img onMouseOver={() => {
            imageRef.current.src = secondaryImg; 
        }} onMouseOut={() => {
            imageRef.current.src = primaryImg; 
        }}
            src={primaryImg}
            ref={imageRef}
            className="align-self-start mr-3" 
            alt="Design your hat"
        />    
    );
}; 

export default ImageTogglerOnMouseOver;