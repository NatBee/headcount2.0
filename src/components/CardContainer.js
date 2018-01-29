import React from 'react';
import Card from './Card';
import '../styles/CardContainer.css';


const CardContainer = (props) => {

    const dataArray = Object.keys(props.allDistrictData);
    const newCard = dataArray.map((location, index) => <Card data={ props.allDistrictData[location]} key={index} handleClick={props.compareCards}/>);
  
    return (
        <div className='card-section'>
            <h2 className='cards-title'>School Data by District</h2>
            <section className='card-wrap'>
                { newCard }
            </section>
        </div>
    );
};

export default CardContainer;