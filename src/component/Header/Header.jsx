
import { useState } from "react";
import FavouriteItem from "./FavouriteItem";
import LocationModal from "./LocationModal";
import Logo from "./Logo";
import Search from "./Search";

function Header() {
  
  const [showFav , setShowFav] = useState(false)
  const handleToggle = ()=>{
    setShowFav( key=> !key)
  }
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        
        <Logo />
        <div className="flex items-center gap-4 relative">
         
          <Search />
          <FavouriteItem onHide={handleToggle} />
          {showFav && <LocationModal />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
