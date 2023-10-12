function Message({ isOwner = false }) {
  const ownerRoundedClasses = isOwner
    ? 'rounded-tr-xl rounded-tl-xl rounded-bl-xl'
    : 'rounded-tl-xl rounded-tr-xl rounded-br-xl';



  return (
    <div className={`messageOwner ${isOwner ? 'flex-row-reverse'  : ''}  text-white flex gap-3 mr-6 `}>
      <div className="messageInfo flex flex-col mb-3 ml-8">
        <img
          className="h-10 w-10 rounded-full"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="User Avatar"
        />
        <span className="text-sm font-light">Just now</span>
      </div>
      <div className= "flex flex-col gap-3 ">
        <p className={`bg-zinc-800 pt-1 pb-1 pr-2 pl-2 text-sm ml-6 max-w-screen-xl mx-auto  ${isOwner ? 'mr-4 ' + ownerRoundedClasses : ownerRoundedClasses}`}>hello how are you what are you doing</p>
       
      </div>
    </div>
  );
}

export default Message;

