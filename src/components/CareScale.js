import React from 'react';
import sun from '../assets/sun.svg';
import water from '../assets/water.svg';

const CareScale = ({scaleValue, careType}) => {
    
    const range = [1, 2, 3];
    const degre = {
        1:"peu", 
        2:"modérement", 
        3:"beaucoup"
    };
    const typ = {
        light: "de lumière", 
        water: "d'arrosage"
    };

    function hadleClick (){
        const x=degre[scaleValue];
        const y=typ[careType];
        alert("cette plante requiert "+x+" "+y);
    }

    const scaleType = careType === 'water' ? (
        <img src={water} alt="water-icon" />
    ):(
        <img src={sun} alt="sun-icon" />
    );

    return (
        <div onClick={hadleClick}>
            {
                range.map( 
                    (rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span>:null
                     )
                
            }
        </div>
    );
};

export default CareScale;