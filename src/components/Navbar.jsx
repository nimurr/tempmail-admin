import { MdOutlineInbox } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePreview } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="h-[100vh] w-full flex flex-col justify-between bg-white z-50 dark:bg-[#111827] border-r-2 border-gray-300 dark:border-gray-800 px-8 py-6">
      {/* top nav item  */}
      <div className="">
        <Link to={"/"} className="text-4xl font-extrabold dark:text-white">
          Bot<span className="text-rose-600">gmail</span>
        </Link>
        <div className="mt-5">
          <ul>
            
            <NavLink
              to={"/"}
              className="my-1 flex gap-2 items-center font-semibold dark:hover:bg-[#1f2937] dark:text-gray-200 dark:hover:text-gray-400 hover:bg-gray-100 hover:text-black rounded cursor-pointer p-2"
            >
              <div className="text-2xl group-hover:text-red-500 text-gray-800 dark:text-white">
                <MdOutlineInbox className="" />
              </div>
              Dashboard
            </NavLink>

            <NavLink
              to={"/setting"}
              className="my-1 flex gap-2 items-center font-semibold dark:hover:bg-[#1f2937] dark:text-gray-200 dark:hover:text-gray-400 hover:bg-gray-100 hover:text-black rounded cursor-pointer p-2"
            >
              <div className="text-2xl group-hover:text-red-500 text-gray-800 dark:text-white">
                <IoSettingsOutline className="" />
              </div>
              Setting
            </NavLink>

            <NavLink
              to={"/review"}
              className="my-1 flex gap-2 items-center font-semibold dark:hover:bg-[#1f2937] dark:text-gray-200 dark:hover:text-gray-400 hover:bg-gray-100 hover:text-black rounded cursor-pointer p-2"
            >
              <div className="text-2xl group-hover:text-red-500 text-gray-800 dark:text-white">
                <MdOutlinePreview className="" />
              </div>
              Review
            </NavLink>

          </ul>
        </div>


      </div>

      {/* <div>
        <img className="w-2/12 animate-ping" src="https://shuffle.dev/static/img/chat-screen2.png" alt="" />
      </div> */}
    </div>
  );
}
