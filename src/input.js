import React from 'react';
import {cmToStitch} from './utils.js';
   
const SimpleHat = props => {
    console.log("SimpleHat pattern description item: ", props.item, "tension: ", props.tension, "size: ", props.size, "length", props.length); 
    return (
        <div className="pattern-description">
            <h1> Mönster till en enkel handstickad mösssa</h1> 
            <h2>STORLEK</h2> Passar huvudomkrets ca {props.size} cm. Längden är, {props.length}cm 
            <h2>MASKTÄTHET</h2> Ca {props.tension[0]} m x {props.tension[1]}  v resår (osträckt) på st 4 = 10 x 10 cm
            <h2>GÖR SÅ HÄR</h2> Sticka 8cm resår, därefter ska sticka en vänd rad och 8cm slät. Minska eftreåt, så att höjden blir proportionellt rätt, och det blir drastisk minskning på slutet och mindre tills det. 
        </div>
    )
}; 

const SantaHat = props => {
    return (
        <div className="pattern-description">
        <h1>Mössa Tomten</h1>
        <h2>STORLEK</h2> Passar huvudomkrets ca {props.size}. Längden är, {props.length}cm.
        <h2>MASKTÄTHET</h2> Ca {props.tension[0]} m x {props.tension[1]} v resår (osträckt) på st 4 = 10 x 10 cm
        <h2>GÖR SÅ HÄR</h2> Ta upp {cmToStitch(props.size, props.tension[0])} maskor och sticka 5cm resår, 10cm slätstickning. 
        Börja minska enligt detta: från {cmToStitch(props.size, props.tension[0])} maskor till 4-6 maskor. 
        Sy ihop och sätt på pomponen.
        </div>
    )
};

export default function PatternDescription(props) {
    console.log("pattern description item: ", props.item, "tension: ", props.tension, "size: ", props.size, "length", props.length); 
  
    const renderSwitch = (param) => {
        console.log("param", param);
        switch(param) {
            case "SimpleHat": return (<SimpleHat {...props}></SimpleHat>); 
            case "PomponHat": return (<SimpleHat {...props}></SimpleHat>); 
            case "PomponHatLongEars": return (<SantaHat {...props}></SantaHat>);
            default: return (<SantaHat {...props} ></SantaHat>);
        }
    }
    return (
      <div>
            {renderSwitch(props.item.description)} 
      </div>
      
    )
}; 
  