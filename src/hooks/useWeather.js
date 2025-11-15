import { useEffect, useState } from 'react'

const useWeather = () => {
  const [loading,setLoading] = useState({state:false,message:""})
  const [error,setError] = useState(null)
  const [weatherData,setWeatherData] = useState({
    location:"",
    climate:"",
    temperature:"",
    maxTemperature:"",
    minTemperature:"",
    humidity:"",
    cloudPercentage:"",
    wind:"",
    time:"",
    longitude:"",
    latitude:""
  })

  async function fetchWeather ( lat , lon ){
    try{
        setLoading({
            ...loading,
            state:true,
            message:"Weather Data Collecting from API..."
        })
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`)
        if(!response.ok){
            const errorMessage = `Data Fetching Is Failed ${response.status}`
            throw new Error(errorMessage)
        }
        const data = await response.json()
        const updateWeatherData = {
            location:data?.name,
            climate:data?.weather[0]?.main,
            temperature:data?.main?.temp,
            maxTemperature:data?.main?.temp_max,
            minTemperature:data?.main?.temp_min,
            humidity:data?.main?.humidity,
            cloudPercentage:data?.clouds.all,
            wind:data?.wind?.speed,
            time:data?.dt,
            longitude:data?.coord?.lon,
            latitude:data?.coord?.lat

        }
        setWeatherData(updateWeatherData)
    }catch(err){
        setError(err)
    }finally{
        setLoading({
            ...loading,
            state:false,
            message:""
        })
    }
  }

  useEffect(()=>{
    setLoading({
        ...loading,
        state:true,
        message:"Data Fetching..."
    })
        navigator.geolocation.getCurrentPosition(({coords})=>{
            fetchWeather(coords.latitude , coords.longitude)
        })
  },[])

  return {
    loading,
    error,
    weatherData
  }
}

export default useWeather