import Sidebar from "../components/Sidebar"
import Chat from "../components/Chat"


function HomePage() {
  return (
    <div className="Home  h-screen flex justify-center items-center">
      <div className="bg-white flex  h-screen w-screen">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default HomePage
