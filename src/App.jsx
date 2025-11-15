import Header from "./component/Header/Header";
import WeatherBoard from "./component/WeatherBoard/WeatherBoard";


export default function App() {
  return (
   
          <div className="bg-red-700 grid place-items-center h-screen">
            <Header />
            <WeatherBoard />
          </div>
       
  );
}
