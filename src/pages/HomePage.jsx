import Sidebar from "../components/Sidebar"
import Chat from "../components/Chat"


function HomePage() {
  return (
    <div className="Home bg-gradient-to-r from-sky-300 to-blue-400 h-screen flex justify-center items-center">
      <div className="bg-white flex rounded-lg h-5/6 w-5/6">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default HomePage
