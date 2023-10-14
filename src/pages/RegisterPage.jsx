import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db} from "../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";



function RegisterPage ()  {
  const [err,setErr] = useState(false);
  const navigate = useNavigate();



  const handleSubmit = async (e)=>{
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{
      const res =await createUserWithEmailAndPassword(auth, email, password);
     const storageRef = ref(storage, displayName);
     const uploadTask = uploadBytesResumable(storageRef, file);
     uploadTask.on(
     (error) => {
       setErr(true);
    }, 
    () => {
    getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
      await updateProfile(res.user,{
        displayName,
        photoURL:downloadURL
      })
      await setDoc(doc(db, "users", res.user.uid ),{
        uid: res.user.uid,
        displayName,
        email,
        photoURL:downloadURL,
      })

      await setDoc(doc(db, "userChats", res.user.uid), {});
      navigate("/");
    });
  }
);
 
    }catch(err){
      setErr(true);
    }

  }
  return (
    <div className="formContainer bg-gradient-to-r from-sky-300 to-blue-400 h-screen flex justify-center items-center  ">
      <div className="formWrapper ">
        <form onSubmit = {handleSubmit}
        className=" bg-gray-900 flex flex-col gap-4 p-8  rounded-lg items-center">
        <span className="logo text-white text-2xl font-semi-bold">Chatter</span>
        <span className="title text-white text-sm font-light ">Register</span>
          <input className="rounded-sm p-2 w-60 bg-gray-800 text-white" type="text" placeholder="display name"  />
          <input className="rounded-sm p-2 w-60 bg-gray-800 text-white" type="email" placeholder="email"/>
          <input className="rounded-sm p-2 w-60 bg-gray-800 text-white" type="password" placeholder=" password"  />
            <label htmlFor="file" className="text-gray-400 p-2 cursor-pointer  py-2 px-4 rounded-lg">
             Click to add Avatar
            </label>
            <input className="hidden" type="file" id="file" />
          <button className="bg-gradient-to-r from-sky-400 to-blue-500 p-1 w-40 rounded-md">Sign Up</button>
          <p className="text-gray-400">Do you have an account?<Link to="/login"> Login</Link></p>
          {err && <span>Something went wrong</span>}
        </form>
        
      </div>
    </div>
  )
}

export default RegisterPage