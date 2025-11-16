
import WeatherLoadingFullScreen from '../component/Loading/WeatherLoadingFullScreen'
import { WeatherContext } from '../context'
import { useWeather } from '../hooks'

const WeatherProvider = ({children}) => {
    const {loading,error,weatherData} = useWeather()
  return (
    <WeatherContext.Provider value={{loading,error,weatherData}}>
      {
        loading.state ? <WeatherLoadingFullScreen message={loading.message}/> : children
      }
    </WeatherContext.Provider>
  )
}

export default WeatherProvider