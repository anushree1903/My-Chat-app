

function Navbar() {
  return (
    <div className="w-full bg-gray-800 rounded-tl-md h-12 font-semi-bold text-white flex justify-between items-center p-2 text-xs md:text-lg">
      Chatter
      <div className="flex items-center">
        <button className="text-xs bg-blue-500 p-1 rounded-md">Logout</button>
        <img
          className="w-10 h-10 ml-4 rounded-full"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="User Avatar"
        />
      </div>
    </div>
  );
}

export default Navbar;
