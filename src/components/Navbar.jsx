import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


function Navbar() {
  const {currentUser} = useContext(AuthContext);
  return (
    <div className="w-full bg-zinc-800  h-12 font-semi-bold text-white flex justify-between items-center mb-1 p-3 text-xs md:text-lg mt-1">
      Chatter
      <div className="flex items-center">
       
        <img
          className="w-10 h-10 ml-4 rounded-full bg-white"
          src={currentUser.photoURL}
          alt=""
        />
        <span className="text-sm ml-2">{currentUser.displayName}</span>
      </div>
    </div>
  );
}

export default Navbar;
