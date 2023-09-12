import './App.css';
import React, {useState, useEffect} from "react";
import Searchbox from "../components/Search";



const App = () => {

  const [weather,updateWeather] = useState([])
  const [searchvalue,searchChange] = useState('')

  const place = 'brazil';
  
  useEffect(() => {
      const fetching = async () => {
        const calling = await fetch(`https://api.weatherapi.com/v1/current.json?key=c2e9e7a0f7504931860185111231209 &q=${place}&aqi=no`);
        const answer = await calling.json();
        updateWeather(answer);
      };
      fetching();
  }, []);
  
  const updating = (event) => {
    searchChange(event.target.value)
  }
  
  console.log(Object.entries(weather))
  
  
  
  return (
  <div className= 'one'>
    <h1>Country<br></br></h1>
    <Searchbox searchChange={updating} />
  </div>
  )
  
  
}

export default App;
