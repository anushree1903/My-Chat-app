import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";


function Chat() {
  return (
    <div className="chat-container flex flex-col w-full bg-zinc-800 rounded-r-lg">
      <div className="chatInfo h-12 w-full bg-zinc-800 flex items-center justify-between ">
        <div className="flex items-center">
          <span className="ml-5 text-gray-200">Anu</span>
        </div>
        <div className="chatIcons flex">
          <img className="h-6 w-6 ml-12" src={Cam} alt="" />
          <img className="h-6 w-6 ml-3" src={Add} alt="" />
          <img className="h-6 w-6 ml-3 mr-5" src={More} alt="" />
          <button className="text-xs ml-3 bg-blue-500 p-1 rounded-md mr-3">Logout</button>
        </div>
      </div>
        <Messages />
     
    </div>
  );
}

export default Chat;