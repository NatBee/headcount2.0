import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../../components/Card';
import { shallow } from 'enzyme';
const mockProps = {
  data: {
    data:{  
      2004:1,
      2005:1,
      2006:1,
      2007:1,
      2008:1,
      2009:1,
      2010:1,
      2011:1,
      2012:1,
      2013:1,
      2014:1
    },
    location: 'COLORADO'}  
  };

const mockProps2 = {
  data: {
    data:{  
      2004:0,
      2005:0,
      2006:0,
      2007:0,
      2008:0,
      2009:0,
      2010:0,
      2011:0,
      2012:0,
      2013:0,
      2014:0
    },
    location: 'COLORADO'}  
}  

it('should match the snapshot', () => {
  const renderedComponent = shallow(<Card {...mockProps} />)
  expect(renderedComponent).toMatchSnapshot()
})

it('should not have a className of .lower for data < 0.5', () => {
  const renderedComponent = shallow(<Card {...mockProps} />);
  expect(renderedComponent.find('.lower').length).toEqual(0);
})

it('should not have a className of .higher for data >= 0.5', () => {
  //change mock data for this case to have all below .5

  const renderedComponent = shallow(<Card {...mockProps2}/>);
  expect(renderedComponent.find('.higher').length).toEqual(0);
})  