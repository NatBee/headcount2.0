import React from 'react';
import Card from './Card';
import '../styles/ComparisonContainer.css';
import PropTypes from 'prop-types';

const ComparisonContainer = (props) => {

    const comparisonPairs = Object.entries(props.comparisonData);
    const dataArray = Object.keys(props.cardCompData);
    const newCard = dataArray.map((location, index) => <Card handleClick={props.removeComparisonCard} data={ props.cardCompData[location]} key={index}/>);

    return (
        <div className={props.visibility}>
            <article className='comp-card-display'>
                <h2 className='comp-card'>{newCard[0]}</h2>
                <div className='comparison'>
                    <h3>{comparisonPairs[0]}</h3>
                    <h3>{comparisonPairs[1]}</h3>
                    <h3>{comparisonPairs[2]}</h3>
                </div>
                <h2 className='comp-card'>{newCard[1]}</h2>
            </article>
        </div>
    );
};

ComparisonContainer.propTypes = {
  comparisonData: PropTypes.object,
  cardCompData: PropTypes.array,
  removeComparisonCard: PropTypes.func,
  visibility: PropTypes.string
}

export default ComparisonContainer;