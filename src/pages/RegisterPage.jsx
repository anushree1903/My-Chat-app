

function RegisterPage() {
  return (
    <div className="formContainer bg-gradient-to-r from-sky-400 to-blue-500 h-screen flex justify-center items-center  ">
      <div className="formWrapper ">
        <form className=" bg-gray-900 flex flex-col gap-4 p-8  rounded-lg items-center">
        <span className="logo text-white text-2xl font-semi-bold">Chatter</span>
        <span className="title text-white text-sm font-light ">Register</span>
          <input className="rounded-sm p-2 w-60 bg-gray-800" type="text" placeholder="Enter you name"  />
          <input className="rounded-sm p-2 w-60 bg-gray-800" type="email" placeholder="enter your Email"/>
          <input className="rounded-sm p-2 w-60 bg-gray-800" type="password" placeholder="Enter your password"  />
            <label htmlFor="file" className="text-gray-400 p-2 cursor-pointer  py-2 px-4 rounded-lg">
             Click to add Avatar
            </label>
            <input className="hidden" type="file" id="file" />
          <button className="bg-gradient-to-r from-sky-400 to-blue-500 p-1 w-40 rounded-md">Sign Up</button>
          <p className="text-gray-400">Do you have an account? Login</p>
        </form>
        
      </div>
    </div>
  )
}

export default RegisterPage
