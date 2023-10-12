import Message from "./Message";
import Input from "./Input";
import background from "../img/background.png"

function Messages() {
  return (
    <div className=" h-screen flex flex-col overflow-scroll" style={{ backgroundImage: `url(${background})` }}>
      <div className="flex-grow">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div>
        <Input />
      </div>
    </div>
  );
}

export default Messages;

