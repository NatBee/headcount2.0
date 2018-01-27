import React from 'react';
import ReactDOM from 'react-dom';
import Controls from '../../components/Controls';
import { shallow } from 'enzyme';

it('should match the snapshot', () => {
  const renderedComponent = shallow(<Controls/>)
  expect(renderedComponent).toMatchSnapshot()
})

it('should update state on input', () => {
  const mockSearch = {target: {value: 'test'}}
  const renderedComponent = shallow(<Controls/>)
  renderedComponent.instance().handleInput(mockSearch)
  expect(renderedComponent.state().district).toEqual('test')
})

