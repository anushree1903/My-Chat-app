import Img from "../img/img.png";
import Attach from "../img/attach.png";

function Input() {
  return (
    <div className="input-container bg-zinc-800 mb-2 w-3/4 mx-auto flex items-center rounded-full">
      <input
        className="bg-zinc-800 text-gray-200 py-2 px-3 rounded-full flex-grow outline-none "
        type="text"
        placeholder="Message"
      />

      <div className="flex items-center space-x-2 ml-2 mr-3">
        <img className="w-7 h-7" src={Attach} alt="Attach" />
        <label htmlFor="file">
          <img className="w-7 h-7" src={Img} alt="Image" />
        </label>
      </div>

      <button className="text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none mr-5">
        Send
      </button>
    </div>
  );
}

export default Input;