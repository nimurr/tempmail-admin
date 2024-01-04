import { FaUser } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdOutlinePreview } from "react-icons/md";
import { BiMessage } from "react-icons/bi";

export default function Home() {
  return (
    <div className="grid xl:grid-cols-3 sm:grid-cols-2  lg:gap-10 gap-4">
      <div className="w-full flex justify-between h-auto rounded-md bg-blue-600 border-b-[25px] border-blue-400 px-5 sm:py-5 py-2 ">
        <div>
          <h2 className="sm:text-xl font-semibold text-gray-200">Users</h2>
          <h2 className="text-5xl font-semibold text-gray-200 mt-5">100</h2>
        </div>
        <div>
          <FaUser className="text-5xl animate-bounce2  text-white"></FaUser>
        </div>
      </div>

      <div className="w-full flex justify-between h-auto rounded-md bg-pink-600 border-b-[25px] border-pink-400 px-5 sm:py-5 py-2 ">
        <div>
          <h2 className="sm:text-xl font-semibold text-gray-200">Use Email</h2>
          <h2 className="text-5xl font-semibold text-gray-200 mt-5">100k</h2>
        </div>
        <div>
          <MdMarkEmailRead className="text-5xl animate-bounce2 text-white"></MdMarkEmailRead>
        </div>
      </div>

      <div className="w-full flex justify-between h-auto rounded-md bg-red-600 border-b-[25px] border-red-400 px-5 sm:py-5 py-2 ">
        <div>
          <h2 className="sm:text-xl font-semibold text-gray-200">ToDay User</h2>
          <h2 className="text-5xl font-semibold text-gray-200 mt-5">10</h2>
        </div>
        <div>
          <FaUsers className="text-5xl animate-bounce2 text-white"></FaUsers>
        </div>
      </div>

      <div className="w-full flex justify-between h-auto rounded-md bg-lime-600 border-b-[25px] border-lime-200 px-5 sm:py-5 py-2 ">
        <div>
          <h2 className="sm:text-xl font-semibold text-gray-200"> Total Verify Users</h2>
          <h2 className="text-5xl font-semibold text-gray-200 mt-5">10k</h2>
        </div>
        <div>
          <FaUsers className="text-5xl animate-bounce2 text-white"></FaUsers>
        </div>
      </div>

      <div className="w-full flex justify-between h-auto rounded-md bg-blue-600 border-b-[25px] border-blue-400 px-5 sm:py-5 py-2 ">
        <div>
          <h2 className="sm:text-xl font-semibold text-gray-200"> Total Review</h2>
          <h2 className="text-5xl font-semibold text-gray-200 mt-5">1000</h2>
        </div>
        <div>
          <MdOutlinePreview className="text-5xl animate-bounce2 text-white"></MdOutlinePreview>
        </div>
      </div>

      <div className="w-full flex justify-between h-auto rounded-md bg-blue-600 border-b-[25px] border-blue-400 px-5 sm:py-5 py-2 ">
        <div>
          <h2 className="sm:text-xl font-semibold text-gray-200"> Message</h2>
          <h2 className="text-5xl font-semibold text-gray-200 mt-5">999</h2>
        </div>
        <div>
          <BiMessage  className="text-5xl animate-bounce2 text-white"></BiMessage>
        </div>
      </div>

     

    </div>
  );
}
