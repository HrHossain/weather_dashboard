import { useContext, useEffect, useState } from "react";
import HeartRedIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../context";

function AddToFavourite() {
  const {addFavourite ,removeFavourite ,  favourites } = useContext(FavouriteContext)
  const {weatherData} = useContext(WeatherContext)
  const [isFavourite,setIsFavourite] = useState(false)
  const {latitude,longitude,location} = weatherData

  const found = favourites.find(fav => fav.location.toLowerCase() === location.toLowerCase())

  const handleToggleFavourite = () =>{
    setIsFavourite( key => !key)

    if(!found){
      addFavourite(latitude,longitude,location)
    }else{
      removeFavourite(location)
    }
    
  }

    useEffect(()=>{
      setIsFavourite(found)
    },[found])


  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleToggleFavourite}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? HeartRedIcon : HeartIcon } alt="heart icon" />
        </button>
      </div>
    </div>
  );
}

export default AddToFavourite;
