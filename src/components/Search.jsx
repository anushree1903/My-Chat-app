
function Search() {
  return (
    <div className="search w-full bg-zinc-800"> 
      <div className="searchForm">
        <input type="text" placeholder="Search..." className="w-full bg-zinc-900 pl-7  text-white p-3 "/> 
      </div>
      <div className="userChat flex mt-5 bg-zinc-800 p-2 hover:bg-zinc-700 cursor-pointer rounded-md m-2">
        <img className="w-10 h-10 ml-4  rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
        <div className="userChatInfo">
          <span className="text-gray-200 ml-3 font-bold">anu</span>
          
        </div>
      </div>
    </div>
  );
}

export default Search;

