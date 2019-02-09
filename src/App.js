import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Current from './components/Current';
import DayList from './components/DayList/DayList';
import axios from 'axios';

class App extends Component {
  state = {
    zipCode: '',
    current: {},
    city: '',
    forecast: []
  }

  handleInput = (event) => {
    event.persist();
    event.preventDefault();
    this.setState({
      zipCode: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.persist();
    event.preventDefault();
    this.getWeather(this.state.zipCode);
  }

  getWeather = (zipCode) => {
    axios.get(`https://api.apixu.com/v1/forecast.json?key=b4a464944a254956a9e183656190902&q=${zipCode}&days=7`)
      .then(response => {
        // console.log(response.data.current)
        // console.log(response.data)
        this.setState({
          current: response.data.current,
          city: response.data.location.name,
          forecast: response.data.forecast.forecastday
        })
      })
  }

  render() {
    let cur = this.state.current;
    console.log(this.state.forecast);
    return (
      <div className="App">
        <Search zipUpdate={this.handleInput} submit={this.handleSubmit}/>
        <Current 
          temp={cur.temp_f}
          humidity={cur.humidity}
          feels={cur.feelslike_f}
          city={this.state.city}
          winSpd={cur.wind_mph}
          winDir={cur.wind_dir}
          uv={cur.uv}
          // condition={cur.condition.text}
          />
          <DayList forecast={this.state.forecast}/>
      </div>
    );
  }
}

export default App;
