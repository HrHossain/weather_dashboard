
import Page from "./page";
import FavouriteProvider from "./provider/FavouriteProvider";
import WeatherProvider from "./provider/WeatherProvider";


export default function App() {
  return (
   <WeatherProvider>
    <FavouriteProvider>
    <Page/>
    </FavouriteProvider>
   </WeatherProvider>
        
  );
}
