import x, { useEffect, useState } from 'react'
import { useContext } from 'react'
import Header from './component/Header/Header'
import WeatherBoard from './component/WeatherBoard/WeatherBoard'
import { WeatherContext } from './context'
import Thunder from "../src/assets/backgrounds/thunderstorm.jpg"
import Rain from "../src/assets/backgrounds/rainy-day.jpg"
import Snow from "../src/assets/backgrounds/snow.jpg"
import Clear from "../src/assets/backgrounds/clear-sky.jpg"
import Clouds from "../src/assets/backgrounds/scattered-clouds.jpg"
import Mist from "../src/assets/backgrounds/mist.jpeg"
import Haze from "../src/assets/backgrounds/few-clouds.jpg"
import ClearSky from "../src/assets/backgrounds/clear-sky.jpg"
import Winter from "../src/assets/backgrounds/winter.jpg"
const Page = () => {
  const {weatherData} = useContext(WeatherContext)
const [bgImage,setBgImage] = useState('')

  function getBackgroundImg(climate){
    switch(climate){
      case "Thunder":
        return Thunder;
      case "Rain":
         return Rain;
      case "Snow":
        return Snow;
      case "Clear":
        return Clear;
      case "Clouds":
        return Clouds
      case "Mist":
        return Mist
      case "Haze":
        return Haze;
      case "Fog":
        return Winter;
      default :
       return ClearSky
    }
  }

  useEffect(()=>{
    const currentImg = getBackgroundImg(weatherData.climate)
    setBgImage(currentImg)

  },[weatherData.climate])
  
console.log(x)
  return (
      <div
      style={{backgroundImage:`url(${bgImage})`}}
       className="grid place-items-center h-screen bg-no-repeat bg-cover">
            <Header />
            <WeatherBoard />
     </div>
       
    
  )
}

export default Page