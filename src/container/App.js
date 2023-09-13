import './App.css';
import React, {useState, useEffect} from "react";
import Searchbox from "../components/Search";



const App = () => {

//  names for the api fetching
  const [country, countryUpdate] = useState([]);
  const [weather,updateWeather] = useState([]);
  const [searchvalue,searchChange] = useState('');

  const place = 'brazil';
  
//  hooks effect fetching
  useEffect(() => {
      const fetching = async () => {
        const calling = await fetch(`https://api.weatherapi.com/v1/current.json?key=c2e9e7a0f7504931860185111231209 &q=${place}&aqi=no`);
        const answer = await calling.json();
        updateWeather(answer);
      };

      fetching();
  }, []);
  
//  hooks effect fetching
  useEffect(() => {
    const fetchwith = async () => {
      const calling = await fetch('https://restcountries.com/v3.1/all');
      const nations = await calling.json();
      countryUpdate(nations);
    };

    fetchwith();
  }, []);

  
  const onsearch = (event) => {
    searchChange(event.target.value);
  };

  const countryNames = country.map(place => place.name.common);
  const filteredCountry = countryNames.filter(names => names.toLowerCase().includes(searchvalue))
  
  console.log(filteredCountry);
  console.log(weather);
  
  return (
    <div className= 'container'>
      <h3> Search</h3>
      <Searchbox searchChange = {onsearch} />
    </div>
  )
  
}

export default App;
