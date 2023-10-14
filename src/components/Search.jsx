import  { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
   
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
       
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

     
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("")
  };
  return (
    <div className="search w-full bg-zinc-800"> 
      <div className="searchForm">
        <input type="text" placeholder="Search..." 
        onKeyDown={handleKey}
        onChange={e=>setUsername(e.target.value)}
        className=" bg-zinc-900 text-white p-3 rounded-2xl w-3/4 md:ml-10 mt-5 outline-none "/> 
      </div>
      {err && <span>user not found</span>}
      {user && <div className="userChat flex mt-5 bg-zinc-800 p-3 hover:bg-zinc-700 cursor-pointer rounded-md m-2" onClick={handleSelect}>
        <img className="w-10 h-10 ml-4 bg-slate-50  rounded-full" src= {user.photoURL} />
        <div className="userChatInfo">
          <span className="text-gray-200 ml-3 font-bold">{user.displayName}</span>
          
        </div>
      </div>}
    </div>
  );
}

export default Search;

