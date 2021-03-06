import React from 'react';
import '../styles/Card.css';
import PropTypes from 'prop-types';

const Card = (props) => {

  const cardDisplay = Object.keys(props['data'].data).map( (year, index) => 
    props['data'].data[year] > .5 ? 
      <li className='higher' key={index}> 
        {year} : {props['data'].data[year]} 
      </li> : 
      <li className='lower' key={index}> 
        {year} : {props['data'].data[year]} 
      </li>
  );
  return (
    <article className='card' 
      onClick={() => props.handleClick(props['data'].location)}>
      <h3>{props['data'].location}</h3>
      <ul>{cardDisplay}</ul>
    </article>
  );
};


Card.propTypes = {
  handleClick: PropTypes.func,
  data: PropTypes.string,
  props: PropTypes.shape({
    data: PropTypes.Object,
    location: PropTypes.string
  })
};

export default Card;