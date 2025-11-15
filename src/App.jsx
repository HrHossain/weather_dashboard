import Header from "./component/Header/Header";
import WeatherBoard from "./component/WeatherBoard/WeatherBoard";
import Page from "./page";
import WeatherProvider from "./provider/WeatherProvider";


export default function App() {
  return (
   <WeatherProvider>
    <Page/>
   </WeatherProvider>
        
  );
}
