import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from '../../components/CardContainer';
import { shallow, mount } from 'enzyme';

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

it('should match the snapshot', () => {
  const renderedComponent = shallow(<CardContainer allDistrictData={mockProps} />)
  expect(renderedComponent).toMatchSnapshot()
})

it('should render expected number of cards', () => {
  
  const renderedComponent = mount(<CardContainer allDistrictData={mockProps} />)
  expect(renderedComponent.find('.card').length).toEqual(1);
})
