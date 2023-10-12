function Message() {
  return (
    <div className="text-white flex gap:3">
    <div className="messageInfo flex flex-col mb-3 ">
      <img className="h-10 w-10 rounded-full"  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="User Avatar"
        />
        <span>Just now</span>
    </div>
    <div className="messageContent">
      <p>hello</p>
     
    </div>
    </div>
  );
}

export default Message;
