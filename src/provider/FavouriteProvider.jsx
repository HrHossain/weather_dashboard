import React from 'react'
import { FavouriteContext } from '../context'
import { useLocalStorage } from '../hooks'

const FavouriteProvider = ({children}) => {
    const [favourites , setFavourites] = useLocalStorage("location",[])

    const addFavourite = (latitude  , longitude , location)=>{
        if(location== null) return;
        
        const newFavourite = { latitude, longitude, location }

        
            setFavourites((prev)=>[...prev , newFavourite])
        
    }

    const removeFavourite = (location)=>{
        if(location == null) return

            setFavourites(fav => fav.filter(fav=>fav.location.toLowerCase() !== location.toLowerCase()))
            
        
    }
  return (
    <FavouriteContext.Provider value={{addFavourite ,removeFavourite ,  favourites }}>
        {children}
    </FavouriteContext.Provider>
  )
}

export default FavouriteProvider