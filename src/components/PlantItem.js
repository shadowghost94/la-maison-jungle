import React from 'react';
import '../styles/PlanItem.css'
import CareScale from './CareScale';

function handleClick(plantName){
    console.log(plantName);
}

const PlantItem = ({ name, cover, id, light, water }) => {
    return (
        <li key={id+1} className='lmj-plant-item' onClick={ handleClick } >
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='light' scaleValue={light} />
                <CareScale careType='water' scaleValue={water} />
            </div>
        </li>
    );
};

export default PlantItem;