import React, { Component } from 'react';
import Controls from './Controls';
import ComparisonContainer from './ComparisonContainer';
import CardContainer from './CardContainer';
import DistrictRepository from './helper';
import '../styles/App.css';
import kinderData from '../data/kindergartners_in_full_day_program.js';

const DistrictData = new DistrictRepository(kinderData);

class App extends Component {

  constructor() {
    super()
    this.state = {
      allDistrictData: [],
      cardCompData: [],
      comparisonData: {}
    }
  }

  componentDidMount() {
    this.setState({ allDistrictData: DistrictData.data })
  }

  handleSearch = (string) => {
    this.setState({ allDistrictData: DistrictData.findAllMatches(string) })
  }

  compareCards = (string) => {
    let location = DistrictData.findByName(string)[0];
    let compCardArr = this.state.cardCompData;
    let foundLocation;

    if(!compCardArr.includes(location) && compCardArr.length < 2) {
      foundLocation = [...compCardArr, location]
      
      this.setState({ cardCompData: foundLocation })
    } else if(!compCardArr.includes(location) && compCardArr.length === 2) {
      compCardArr.shift();
      foundLocation = [...compCardArr, location]

      this.setState({ cardCompData: foundLocation })
    }
      this.comparison(compCardArr)
  }

  comparison = (array) => {
    console.log('init');
    if(this.state.cardCompData.length === 2) {
      let compData = DistrictData.compareDistrictAverages(array[0].location, array[1].location)

      this.setState({ comparisonData: compData })
    }
  }

  render() {
    return (
      <section>
        <Controls handleSearch={this.handleSearch} />
        <ComparisonContainer cardCompData={ this.state.cardCompData } comparisonData={ this.state.comparisonData }/>
        <CardContainer allDistrictData={ this.state.allDistrictData } compareCards={ this.compareCards }/>
      </section>
    );
  }
}

export default App;
