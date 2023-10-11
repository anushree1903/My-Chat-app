import Message from "./Message";
import background from "../img/background.png";

function Messages() {
  return (
    <div className="message-container flex flex-col items-center justify-between p-4 h-screen" style={{ backgroundImage: `url(${background})` }}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <div className="input-container w-2/3 h-12 bg-zinc-800 rounded-2xl pl-5 pt-3 text-gray-200 text-md">
        Message....
      </div>
    </div>
  );
}

export default Messages;