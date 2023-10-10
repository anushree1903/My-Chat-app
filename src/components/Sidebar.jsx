import Chats from "./Chats"
import Navbar from "./Navbar"
import Search from "./Search"




function Sidebar() {
  return (
    <div className="hidden md:block w-1/4 md:w-1/4 h-full bg-gray-900 rounded-l-md">
      <Navbar />
      <Search />
      <Chats />
     
    </div>
  )
}

export default Sidebar
