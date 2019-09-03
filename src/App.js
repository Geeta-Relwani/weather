import React from 'react';
import './App.css';

import Form from './components/Form';
import Title from './components/Title';
import Weather from './components/Weather';

const API_KEY = '9093801c1659ed5a1edc5207aa5032a7';

class App extends React.Component{

  state={
    city : undefined,
    country : undefined,
    temperature : undefined,
    description: undefined,
    humidity: undefined,
    pressure: undefined,
    seaLevel: undefined,
    error : undefined,
  }

  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    
    const data = await api_call.json();

    
    if(city && country){
      
    this.setState( {
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      seaLevel: data.main.seaLevel,
      error: '',
      
    });

    console.log(data);
    }//if

    else{
      this.setState( {
        city : undefined,
    country : undefined,
    temperature : undefined,
    description: undefined,
    humidity: undefined,
    pressure: undefined,
    seaLevel: undefined,
        error: 'Please Enter The Value',
        
      });
      

    }
  }

  render(){
    return(
      <div>
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather 
          city = {this.state.city}
          country = {this.state.country}
          temperature = {this.state.temperature}
          description = {this.state.description}
          humidity = {this.state.humidity}
          pressure = {this.state.pressure}
          seaLevel = {this.state.seaLevel}
          error = {this.state.error}
        
        />

      </div>
    );
  }

}



export default App;
