
import AddToFavourite from "./AddToFavourite";
import WeatherCondition from "./WeatherCondition";
import WeatherHeadline from "./WeatherHeadline";

function WeatherBoard() {
  
  return (
    <main>
      <section className="">
        <div className="container">
          <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-6">
             
                  {/* add to favourite */}
                  <AddToFavourite />
                  {/* weather headline */}
                  <WeatherHeadline />

                  {/* weather condition */}
                  <WeatherCondition />
                
              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WeatherBoard;
