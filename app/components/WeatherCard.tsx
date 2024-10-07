import styles from '../page.module.css'
import Image from 'next/image'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudMoonRain } from '@fortawesome/free-solid-svg-icons'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react';
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faWater } from '@fortawesome/free-solid-svg-icons'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png' 


const getWeatherIcon = (icon:string) => {
    if(icon==="01d" || icon==="01n"){
        return clear_icon;
    }
    else if(icon==="02d" || icon==="02n"){
        return cloud_icon;
    }
    else if(icon==="03d" || icon==="03n"){
        return drizzle_icon;
    }
    else if(icon==="04d" || icon==="04n"){
        return drizzle_icon;
    }
    else if(icon==="09d" || icon==="09n"){
        return rain_icon;
    }
    else if(icon==="10d" || icon==="10n"){
        return cloud_icon;
    }
    else if(icon==="13d" || icon==="13n"){
        return snow_icon;
    }
    else{
        return clear_icon;
    }
}




const WeatherCard = (props: { city: string; humidity: number; windspeed: number; temp: number; weatherVisible: Boolean; icon: string;}) => {
    return(
        <div className={styles.Weather} style={{display: props.weatherVisible ? 'flex' : 'none'}}>

            {/*<FontAwesomeIcon icon={faCloudMoonRain} style={{width:'100px', height:'100px'}} />*/}
            
            <Image
            src={getWeatherIcon(props.icon)}
            alt=""
            width={100}
            height={100}
            />
            <h1>{Math.trunc(props.temp)}°c</h1>
            <h1>{props.city?.charAt(0).toUpperCase() + props.city?.slice(1)}</h1>
            <div className={styles.info}>
                <div className={styles.card}>
                 <FontAwesomeIcon icon={faWater}  style={{width:'25px', height:'25px'}}  />
                 <div className={styles.humidity}>
                 <h4>{props.humidity}%</h4>
                    <h4>Humidity</h4>
                </div>
                    
                </div>
                <div className={styles.card}>
                <FontAwesomeIcon icon={faWind} style={{width:'25px', height:'25px'}} />
                    <div className={styles.wind}>
                    <h4>{props.windspeed} km/h</h4>
                    <h4>Wind Spedd</h4>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default WeatherCard