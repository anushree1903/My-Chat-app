import Chats from "./Chats"
import Navbar from "./Navbar"
import Search from "./Search"




function Sidebar() {
  return (
    <div className="hidden md:block w-1/3 md:w-1/3 h-full bg-zinc-800 rounded-l-md">
      <Navbar />
      <Search />
      <Chats />
     
    </div>
  )
}

export default Sidebar
