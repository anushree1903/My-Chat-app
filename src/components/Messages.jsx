import  Message from "./Message"
import background from "../img/background.png"

function Messages() {
  return (
    <div className="message-container p-4 h-5/6 " style={{ backgroundImage: `url(${background})` }}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      
    </div>
  )
}

export default Messages
