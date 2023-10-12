import Message from "./Message";
import Input from "./Input";
import background from "../img/background.png"

function Messages() {
  return (
    <div className=" h-screen flex flex-col overflow-scroll" style={{ backgroundImage: `url(${background})` }}>
      <div className="flex-grow">
      <Message isOwner={true} /> {/* This is a message sent by the owner */}

      <Message isOwner={true} /> {/* Another message from the owner */}
      <Message isOwner={false} />
      <Message isOwner={true} /> {/* This is a message sent by the owner */}

      <Message isOwner={true} /> {/* Another message from the owner */}

      <Message isOwner={true} /> {/* This is a message sent by the owner */}
  
      <Message isOwner={true} /> {/* Another message from the owner */}

      <Message isOwner={true} /> {/* This is a message sent by the owner */}
 
      <Message isOwner={true} /> {/* Another message from the owner */}
  
      </div>
      <div>
        <Input />
      </div>
    </div>
  );
}

export default Messages;

