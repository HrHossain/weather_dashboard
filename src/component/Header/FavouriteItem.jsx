import HeartIcon from "../../assets/heart.svg";
function FavouriteItem({onHide}) {
  return (
    <div className="p-2 border hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
      <img src={HeartIcon} alt="heart-icon" />
      <span onClick={onHide}>Favourite Locations</span>
    </div>
  );
}

export default FavouriteItem;
