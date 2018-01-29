import React, { Component } from 'react';
import Controls from './Controls';
import ComparisonContainer from './ComparisonContainer';
import CardContainer from './CardContainer';
import DistrictRepository from './helper';
import '../styles/App.css';
import Arrow from '../styles/images/right-arrow.svg'
import kinderData from '../data/kindergartners_in_full_day_program.js';

const DistrictData = new DistrictRepository(kinderData);

class App extends Component {

  constructor() {
    super()
    this.state = {
      allDistrictData: [],
      cardCompData: [],
      comparisonData: {},
      menuVisible: false
    }
     
  }

  componentDidMount() {
    this.setState({ allDistrictData: DistrictData.data
     })
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
      
      this.setState({
        cardCompData: foundLocation
      }, () => {
        this.comparison(this.state.cardCompData);
    });
    } else if(!this.state.cardCompData.includes(location) && this.state.cardCompData.length === 2) {
      this.state.cardCompData.pop();
      let foundLocation = [...this.state.cardCompData, location]

      this.setState({
        cardCompData: foundLocation
      }, () => {
        this.comparison(this.state.cardCompData);
      });
    }
  }

  removeComparisonCard = (e) => {
    const cardCompData = this.state.cardCompData.filter(location => location.location !== e)
    this.setState({ cardCompData, comparisonData: {} },  ) 
  }

  toggleCompare = () => {
    this.setState({ 
      menuVisible: !this.state.menuVisible
     })

  }

  comparison = (array) => {

    if(this.state.cardCompData.length === 2) {
      console.table(this.state.cardCompData)
      let compData = DistrictData.compareDistrictAverages(array[0].location, array[1].location)
      this.setState({ comparisonData: compData })
    }
    //console.log(this.state.comparisonData)
  }

  render() {

    let button;
    let visible;
    if (this.state.cardCompData.length >= 1) {
      button = 'toggle-compare show';
      visible = 'comparison-cards show';
    } else if(this.state.cardCompData.length < 1){
      button = 'toggle-compare hide';
      visible = 'comparison-cards hide';
    }

    return (
      <section className='app-wrap'>
        <Controls handleSearch={this.handleSearch} />
        {<button onClick={this.toggleCompare} className={ button } >Compare Cards<img src={Arrow} /></button>}
        <ComparisonContainer visibility={visible} removeComparisonCard={this.removeComparisonCard} cardCompData={ this.state.cardCompData } comparisonData={ this.state.comparisonData }/>
        <CardContainer allDistrictData={ this.state.allDistrictData } compareCards={ this.compareCards }/>
      </section>
    );
  }
}

export default App;
