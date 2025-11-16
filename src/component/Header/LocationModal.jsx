import { useContext } from "react";
import { FavouriteContext, LocationContext } from "../../context";

function LocationModal() {
 const { favourites } = useContext(FavouriteContext)
 const {setSelectLocation} = useContext(LocationContext)

 const handleSelect = (select)=>{
  if(select){
    setSelectLocation(select)
  }

 }
  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0  top-16  text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {
          favourites.length > 0 ? (favourites.map(fav=>(
            <li key={fav.Location}  className="hover:bg-gray-200">
              <a onClick={()=>handleSelect(fav)} className="text-black"> {fav.location}</a>
              </li>
          ))):(<p>No data added yet</p>)
        }
      </ul>
    </div>
  );
}

export default LocationModal;
