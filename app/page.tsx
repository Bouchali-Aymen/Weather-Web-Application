'use client'
import styles from './page.module.css'
import Search from './components/search'
import './globals.css'
import { SetStateAction, useState, useEffect , useRef} from 'react'
import'./components/WeatherCard'
import WeatherCard from './components/WeatherCard'
import img from './assets/background.jpg'


  
export default function Home() {

  //variables


  const [city, setCity] = useState('');
  const [data , setData] = useState([]);
  const humidity = useRef(0);
  const windspeed = useRef(0);
  const temp = useRef(0);
  const icon = useRef("");
  const [weatherVisible,setWeatherVisible] = useState(false);
  const [wrongcity,setwrongcity] = useState(false);
  const [wicon,setWicon] = useState();


  //Handle city name and weather card visibility

  const handleOnSearchChange = (newCity: SetStateAction<string>,visible: SetStateAction<boolean>) => {
    setCity(newCity)
    setWeatherVisible(visible)
  }
  



/* Api Call*/
  useEffect(() => {
    // Use the city state variable in the URL
    if(city!==""){
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=247b278aaf546d0ceeb3d228734c1dfd`)
      
      .then((response) =>{
        if(response.status ===  404){
          setWeatherVisible(false);
          setwrongcity(true);
          alert("invalid city name");
          return;
        }
        setwrongcity(false);
        return response.json();
      }
      )
      .then((weatherData) => {
        humidity.current = 0 
        windspeed.current = 0 
        temp.current = 0
        icon.current = "";
        console.log(weatherData);
        humidity.current = humidity.current + weatherData.main.humidity;
        windspeed.current = windspeed.current + weatherData.wind.speed;
        temp.current = temp.current + weatherData.main.temp;
        icon.current = weatherData.weather[0].icon;

        console.log(typeof(weatherData));

        setData(weatherData);
      })
      .catch((error) => console.error('Error fetching weather data:', error));
    }
   
  }, [city]); // Run the effect when 'city' changes

   


  
  return (
    <div className='container' style={{backgroundImage: `url('${img}')`}}>
      <Search OnSearchChange={handleOnSearchChange}/>
      
      <WeatherCard city={city} humidity={humidity.current} windspeed={windspeed.current} temp={temp.current} weatherVisible={weatherVisible} icon={icon.current}/>
    </div>
  )
}
