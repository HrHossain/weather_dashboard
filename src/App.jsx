
import Page from "./page";
import FavouriteProvider from "./provider/FavouriteProvider";
import LocationProvider from "./provider/LocationProvider";
import WeatherProvider from "./provider/WeatherProvider";


export default function App() {
  return (
    <LocationProvider>
      <FavouriteProvider>
        <WeatherProvider>
          <Page/>
        </WeatherProvider>
        </FavouriteProvider>
   </LocationProvider>
        
  );
}
