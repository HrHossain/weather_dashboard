
import { useContext, useEffect, useState } from "react";
import SearchIcon from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";

function Search() {
  const {selectLocation,setSelectLocation} = useContext(LocationContext)
  const [query , setQuery] = useState('')

  const userTrigger = ()=>{
    if(query.trim() !== ""){
      const value = getLocationByName(query)
      setSelectLocation(value)
    }
    
  }

  useEffect(()=>{
    if(!query) return;
    const timer = setTimeout(()=>{
      userTrigger()
      console.log(selectLocation)
    },600)

     return ()=>clearTimeout(timer)
  },[query])

  const handleSearch=(e)=>{
    e.preventDefault()
     userTrigger()
     
  }
  
    
  
  return (
    <form  onSubmit={handleSearch} >
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          value={query}
          placeholder="Search Location"
          onChange={(e)=>setQuery(e.target.value)}
          required
        />
        <button type="submit">
          <img src={SearchIcon} />
        </button>
      </div>
    </form>
  );
}

export default Search;
