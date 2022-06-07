import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { DataWeather } from './Components/DataWeather'
import Converter from './Components/Converter'
import Loader from './Components/Loader'







function App() {

  // States 
  const [latLon, setLatLon] = useState()
  const [weather, setWeather] = useState()
  const [fahrenheit, setFahrenheit] = useState(0)
  const [isLoading, setIsLoading] = useState(true)



  //Get longitude and latitude
  useEffect(() => {

    const sucess = pos => {
      const lat = pos.coords.latitude
      const lon = pos.coords.longitude
      setLatLon({ lat, lon })
    }

    navigator.geolocation.getCurrentPosition(sucess)

  }, [])

  //Accessing the api ()
  useEffect(() => {
    if (latLon !== undefined) {

      const API_KEY = '73faaeeb0ed2f09e478d49177a7dd922'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=${API_KEY}`


      axios.get(URL)
        .then(res => {
          setWeather(res.data)
          setIsLoading(false)
        })
        .catch(err => console.log(err))

    }

  }, [latLon])

  console.log(weather)
  //variables for the converter ()
  const temperature = weather?.main.temp
  const converter = (temperature - 273.15).toFixed(1)
  const farenToCel = () => setFahrenheit(!fahrenheit)


  return (
    <div className="App">
      { isLoading ?

          <Loader/>:
         
        <main className='box-dataContainer'>

          <DataWeather
            weather={weather}
          />
          <Converter
            weather={weather}
            temperature={temperature}
            converter={converter}
            farenToCel={farenToCel}
            fahrenheit={fahrenheit}
          />

        </main>
      }


    </div>
  )
}

export default App
