import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/App';
import { shallow } from 'enzyme';

describe('App tests', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<App/>)

    const mockedDistrict = {"data": {"2004": 0.24, 
                            "2005": 0.278, 
                            "2006": 0.337, 
                            "2007": 0.395, 
                            "2008": 0.536, 
                            "2009": 0.598, 
                            "2010": 0.64, 
                            "2011": 0.672, 
                            "2012": 0.695, 
                            "2013": 0.703, 
                            "2014": 0.741}, 
                            "location": "COLORADO"}
  })
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should gather clean data from all districts', () => {
    expect(Object.keys(renderedComponent.state().allDistrictData).length).toBe(181)
  });

  it('when handleSearch is called with a district, the state should have that district object', () => {
    const mockedDistrict = {"data": {"2004": 0.24, 
                            "2005": 0.278, 
                            "2006": 0.337, 
                            "2007": 0.395, 
                            "2008": 0.536, 
                            "2009": 0.598, 
                            "2010": 0.64, 
                            "2011": 0.672, 
                            "2012": 0.695, 
                            "2013": 0.703, 
                            "2014": 0.741}, 
                            "location": "COLORADO"}
  

    renderedComponent.instance().handleSearch('COLORADO')
    expect(renderedComponent.state().allDistrictData[0]).toEqual(mockedDistrict)
  })

  it('should have 1 card in cardCompData when compare care function runs once', () => {
    renderedComponent.instance().compareCards('COLORADO')
    expect(renderedComponent.state().cardCompData.length).toEqual(1) 
  })

  it('should have 2 cards in cardCompData array', () => {
    renderedComponent.instance().compareCards('COLORADO')
    renderedComponent.instance().compareCards('COLORADO SPRINGS 11')
    expect(renderedComponent.state().cardCompData.length).toEqual(2)

  })

  it('should compare the cards when there are 2', () => {
    const mockedCompareData = 
      {data: {2004: 0.24, 2005: 0.278, 2006: 0.337, 2007: 0.395, 2008: 0.536, 2009: 0.598, 2010: 0.64, 2011: 0.672, 2012: 0.695, 2013: 0.703, 2014: 0.741}
location: "COLORADO"}, 
{data: {2004: 0.069, 2005: 0.509, 2006: 0.638, 2007: 0.994, 2008: 0.992, 2009: 1, 2010: 0.993, 2011: 0.994, 2012: 0.993, 2013: 0.989, 2014: 0.994}
location: "COLORADO SPRINGS 11"};

    renderedComponent.instance().comparison(['COLORADO', 'COLORADO SPRINGS 11'])
    console.log(renderedComponent.state().comparisonData)
    expect(renderedComponent.state().comparisonData).toEqual(mockedCompareData)
  })

  it('it should remove a card from cardCompData array', () => {
    const mockedCompareData = {
      {data: {2004: 0.24, 2005: 0.278, 2006: 0.337, 2007: 0.395, 2008: 0.536, 2009: 0.598, 2010: 0.64, 2011: 0.672, 2012: 0.695, 2013: 0.703, 2014: 0.741}
location: "COLORADO"}
    renderedComponent.instance().removeComparisonCard('COLORADO SPRINGS 11')
    expect(renderedComponent.state().comparisonData).toEqual(mockedCompareData)
  })

})



