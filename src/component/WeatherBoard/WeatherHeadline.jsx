
import CloudIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import Pin from "../../assets/pin.svg";
import RainIcon from "../../assets/rainy.svg";
import SunnyIcon from "../../assets/sun.svg";
import ThunderIcon from "../../assets/thunder.svg";
import { useWeather } from "../../hooks";
import { getFormattedTime } from "../../utils/date-format";


function WeatherHeadline() {
  const {weatherData} = useWeather()

  const {location,
    climate,
    temperature,
    time
    } = weatherData
  
  function getWeatherIcon(climate) {
    switch (climate) {
      case "Rain":
        return RainIcon;

      case "Clouds":
        return CloudIcon;

      case "Snow":
        return "SnowIcon";

      case "Clear":
        return SunnyIcon;

      case "Thunder":
        return ThunderIcon;

      case "Fog":
        return HazeIcon;

      case "Haze":
        return HazeIcon;
      case "Mist":
        return HazeIcon;
      default:
        return SunnyIcon;
    }
  }
  
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="cloud" />

        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={Pin} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
        
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedTime(time, "time", false)} - 
        {getFormattedTime(time, "date", false)} 
      </p>
    </div>
  );
}

export default WeatherHeadline;
