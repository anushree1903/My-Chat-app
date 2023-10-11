import Message from "./Message";
import background from "../img/background.png";
import Input from "./Input";

function Messages() {
  return (
    <div className="message-container flex flex-col items-center justify-between p-4 h-screen" style={{ backgroundImage: `url(${background})` }}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Input />
    </div>
  );
}

export default Messages;