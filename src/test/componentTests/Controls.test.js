import React from 'react';
import ReactDOM from 'react-dom';
import Controls from '../../components/Controls';
import { shallow, mount } from 'enzyme';

it('should match the snapshot', () => {
  const renderedComponent = mount(<Controls />);
  expect(renderedComponent).toMatchSnapshot();
})

it('should update state on input', () => {
  const mockFunc = jest.fn();
  const mockSearch = {target: {value: 'test'}};
  const renderedComponent = shallow(<Controls handleSearch={mockFunc} />);
  renderedComponent.instance().handleInput(mockSearch);
  expect(renderedComponent.state().district).toEqual('test');
})

