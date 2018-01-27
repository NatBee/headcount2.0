import React, { Component } from 'react';
import Card from './Card';
import '../styles/ComparisonContainer.css';

const ComparisonContainer = (props) => {

  const dataArray = Object.keys(props.cardCompData)
  const newCard = dataArray.map((location, index) => <Card data={ props.cardCompData[location]} key={index}/>)

  return (
    <section className='comparison-cards'>
      <h1>Comparison Section</h1>
        <article className='comp-card-display'>
          <h2 className='comp-card'>{newCard[0]}</h2>
          <h2>Comparison</h2>
          <h2 className='comp-card'>{newCard[1]}</h2>
        </article>
    </section>
  )
}

export default ComparisonContainer