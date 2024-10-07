'use client'

import styles from '../page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { SetStateAction, useEffect , useState } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface SearchProps {
  OnSearchChange: (newCity: string, visible: boolean) => void;
}



const Search: React.FC<SearchProps> = ({OnSearchChange}) => {
    const [city , setCity] = useState<string>('');
    const [weatherVisible,setWeatherVisible] = useState<boolean>(false);

    const handleOnChange = (event: { target: { value: any } }) => {
        const newCity = event.target.value;
        setCity(newCity);
        
    }
    const handleOnClick = () =>{
      const visible = true;
      setWeatherVisible(visible);
        OnSearchChange(city,weatherVisible);
    }

    return(
        <form className={styles.nav} action="">
        <label htmlFor='city'>Enter The Name Of The City</label>
          <div className={styles.search}>
            <input type="text" className={styles.input} placeholder="Search for city" defaultValue="" id='city' onChange={handleOnChange}/><FontAwesomeIcon icon={faSearch} className={styles.icon}></FontAwesomeIcon>
          </div>
          <button type="button" className={styles.getWeather} onClick={handleOnClick}>Get Weather</button>
      </form>
    );
}

export default Search;