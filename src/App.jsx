
import Page from "./Page.jsx";
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
