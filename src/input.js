import React, { useState } from 'react';

const SimpleHat = props => {
    return (
        <div class="pattern-description">
            <h1> Mönster till en enkel handstickad mösssa</h1> 
            <h2>MASKTÄTHET</h2> Ca 27 m x 28 v resår (osträckt) på st 4 = 10 x 10 cm
            <h2>STORLEK</h2> Passar huvudomkrets ca 48-58 cm
            <h2>MÖSSANS OMKRETS</h2> Ca 38-39 cm (osträckt)
            8cm resår, därefter ska sticka en vänd rad och 8cm slät. Minska eftreåt, så att höjden blir proportionellt rätt, och det blir drastisk minskning på slutet och mindre tills det. 
        </div>
    )
}; 

const SantaHat = props => {
    return (
        <div class="pattern-description">
        <h1>Mössa Tomten</h1>
        <h2>MASKTÄTHET</h2> Ca 27 m x 28 v resår (osträckt) på st 4 = 10 x 10 cm
        <h2>STORLEK</h2> Passar huvudomkrets ca 48-58 cm
        <h2>MÖSSANS OMKRETS</h2> Ca 38-39 cm (osträckt)
        Ta upp xx maskor och sticka 5cm resår, 10cm slätstickning. Börja minska enligt detta: från xx maskor till 4-6 maskor. Sy ihop och sätt på pomponen.
        </div>
    )
};

export default function PatternDescription(props) {
    console.log("pattern description item: ", props.item, "tension: ", props.tension, "size: ", props.size); 
    const description = "<SimpleHat />"; 

    const renderSwitch = (param) => {
        console.log("param", param);
        switch(param) {
            case "SimpleHat": return (<SimpleHat></SimpleHat>); 
            case "PomponHat": return (<SimpleHat></SimpleHat>); 
            case "PomponHatLongEars": return (<SantaHat></SantaHat>);
            default: return (<SantaHat></SantaHat>);
        }
    }
    return (
      <div>
            {renderSwitch(props.item.description)} 
            
      
      </div>
      
    )
}; 
  