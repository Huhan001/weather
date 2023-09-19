import './App.css';
import React, {useState, useEffect} from "react";
import Searchbox from "../components/Search";



const App = () => {

//  names for the api fetching
  const [country, countryUpdate] = useState([]);
  const [weather,updateWeather] = useState([]);
  const [searchvalue,searchChange] = useState('');
  const [singleCountry, manyOther] = useState([]);

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


  useEffect(() => {
    const filtercountries = () => {
      const countryNames = country.map(place => place.name.common);
      const filteredCountry = countryNames.filter(names => names.toLowerCase().includes(searchvalue))
      if (filteredCountry.length === 1) {
        manyOther(filteredCountry)
      }
    }

    filtercountries();
    },[country, searchvalue]);


  //  hooks effect fetching
  useEffect(() => {
    const fetching = async () => {
      const calling = await fetch(`https://api.weatherapi.com/v1/current.json?key=c2e9e7a0f7504931860185111231209 &q=${singleCountry[0]}&aqi=no`);
      const answer = await calling.json();
      updateWeather(answer);
    };
    fetching();
    }, [singleCountry]);


//  time

  return (
      <div className= 'container'>
        <div className= 'searchbox'>
          <Searchbox searchChange = {onsearch} />
        </div>
        <div className= 'weatherbox'>
          <div className= 'header'>
            <h4 className= 'country'>{singleCountry.length === 0? 'Loading ...': singleCountry} </h4>
            <h4>{weather.location?.localtime.substring(11,16)}</h4>
          </div>
        </div>

      </div>
  )
  
}

export default App;
