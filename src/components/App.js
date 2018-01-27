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
      cardCompData: []
    }
  }

  componentDidMount() {
    this.setState({
      allDistrictData: DistrictData.data
    })
  }

  handleSearch = (string) => {
    this.setState({
      allDistrictData: DistrictData.findAllMatches(string)
    })
  }

  compareCards = (string) => {
    //set up conditional where if click on card in card container put in cardCompData array 
    //if card click in comparison container remove card from cardCompData array
    //create new card component for comparison card

    let location = DistrictData.findByName(string)[0];

    if(!this.state.cardCompData.includes(location) && this.state.cardCompData.length < 2) {
      let foundLocation = [...this.state.cardCompData, location]
      
      this.setState({
        cardCompData: foundLocation
      })
    } else if(!this.state.cardCompData.includes(location) && this.state.cardCompData.length === 2) {
      this.state.cardCompData.shift();
      let foundLocation = [...this.state.cardCompData, location]

      this.setState({
        cardCompData: foundLocation
      })
    }
  }

  render() {
    return (
      <section>
        <Controls handleSearch={this.handleSearch} />
        <ComparisonContainer cardCompData={ this.state.cardCompData }/>
        <CardContainer allDistrictData={ this.state.allDistrictData } compareCards={ this.compareCards }/>
      </section>
    );
  }
}

export default App;
