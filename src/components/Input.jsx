import Img from "../img/img.png"
import Attach from "../img/attach.png"

function Input() {
  return (
    <div className="input-container w-2/3 h-12 bg-zinc-800 rounded-2xl pl-5 text-gray-200 text-md flex justify-between items-center">
      <input className="bg-zinc-800 outline-none flex-grow" type="text" placeholder="Message" />

      <div className="flex space-x-4">
        <img className="w-6 h-6 " src={Attach} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img className="w-6 h-6 " src={Img} alt="" />
        </label>
      </div>

      <button className="mr-5 ml-4">Send</button>
    </div>
  );
}

export default Input
