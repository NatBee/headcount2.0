import React, { Component } from 'react';
import Card from './Card';
import '../styles/ComparisonContainer.css';

const ComparisonContainer = (props) => {
  // console.log(Object.entries(props.comparisonData))
  const comparisonPairs = Object.entries(props.comparisonData)
  //console.log(comparisonPairs[0])
  const dataArray = Object.keys(props.cardCompData)
  const newCard = dataArray.map((location, index) => <Card data={ props.cardCompData[location]} key={index}/>)

  return (
    <section className='comparison-cards'>
      <h1>Comparison Section</h1>
        <article className='comp-card-display'>
          <h2 className='comp-card'>{newCard[0]}</h2>
          <div className='comparison'>
            <h2>{comparisonPairs[0]}</h2>
            <h2>{comparisonPairs[1]}</h2>
            <h2>{comparisonPairs[2]}</h2>
          </div>
          <h2 className='comp-card'>{newCard[1]}</h2>
        </article>
        <hr></hr>
    </section>
  )
}

export default ComparisonContainer