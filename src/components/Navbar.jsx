import { MdOutlineInbox } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { IoBagAddOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { RiProductHuntLine } from "react-icons/ri";
import { FaThList } from "react-icons/fa";
import { Accordion } from "flowbite-react";
import { BsBodyText } from "react-icons/bs";
import { CiCirclePlus, CiUser } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";
import { HiOutlineUserAdd } from "react-icons/hi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";



export default function Navbar() {
  return (
    <div className="h-[100vh] overflow-y-scroll w-full flex flex-col justify-between bg-white z-50 dark:bg-[#111827] border-r-2 border-gray-300 dark:border-gray-800 px-8 py-6">
      {/* top nav item  */}
      <div className="">
        <Link to={"/"} className="text-4xl font-extrabold dark:text-white">
          Adi<span className="text-blue-500">das</span>
        </Link>
        <div className="mt-5">
          <ul>
            <NavLink
              to={"/"}
              className="my-1 flex gap-2 items-center font-semibold dark:text-white p-2"
            >
              <div className="text-2xl group-hover:text-red-500 text-gray-800 dark:text-white">
                <MdOutlineInbox className="" />
              </div>
              Dashboard
            </NavLink>

            <NavLink
              to={"/setting"}
              className="my-1 flex gap-2 items-center font-semibold dark:text-white p-2"
            >
              <div className="text-2xl group-hover:text-red-500 text-gray-800 dark:text-white">
                <IoSettingsOutline className="" />
              </div>
              Setting
            </NavLink>

            <NavLink
              to={"/all-products"}
              className="my-1 flex gap-1 relative items-center font-semibold dark:text-white p-2"
            >
              <div className="text-2xl group-hover:text-red-500 text-gray-800 dark:text-white">
                <RiProductHuntLine className="" />
              </div>
              All Products
              <small className="absolute right-0  bg-red-600 p-1 w-6 h-6 px-1 text-[12px] flex justify-center items-center rounded-full text-white">99+</small>
            </NavLink>

            <NavLink
              to={"/add-products"}
              className="my-1 flex gap-2 items-center font-semibold dark:text-white p-2"
            >
              <div className="text-2xl group-hover:text-red-500 text-gray-800 dark:text-white">
                <IoBagAddOutline className="" />
              </div>
              Add Products
            </NavLink>

            <NavLink
              to={"/order"}
              className="my-1 flex gap-2 items-center relative font-semibold dark:text-white p-2"
            >
              <div className="text-2xl group-hover:text-red-500 text-gray-800 dark:text-white">
                <FaThList
                  className="text-sm
                "
                />
              </div>
              Orders
              <small className="absolute right-2  bg-red-600 p-1 w-6 h-6 flex justify-center items-center rounded-full text-white">10</small>
            </NavLink>

            <NavLink
              to={"/add-menubar"}
              className="my-1 flex gap-2 items-center font-semibold dark:text-white p-2"
            >
              <div className="text-2xl group-hover:text-red-500 text-gray-800 dark:text-white">
                <IoIosMenu className="" />
              </div>
              Add Menu
            </NavLink>

            <Accordion className="border-0 ">
              <Accordion.Panel>
                <Accordion.Title className="py-2 px-2">
                  <div className="flex items-center gap-2">
                    <BsBodyText className="text-xl" /> Content
                  </div>
                </Accordion.Title>
                <Accordion.Content className="px-0 py-1">
                  <NavLink
                    to={"/header-content"}
                    className="my-1 text-sm flex gap-2 items-center font-semibold dark:text-white p-2"
                  >
                    <div className="text-2xl group-hover:text-red-500 text-gray-800 dark:text-white">
                      <CiCirclePlus className="" />
                    </div>
                    Header Content
                  </NavLink>
                  <NavLink
                    to={"/history-section"}
                    className="my-1 text-sm flex gap-2 items-center font-semibold dark:text-white p-2"
                  >
                    <div className="text-2xl group-hover:text-red-500 text-gray-800 dark:text-white">
                      <CiCirclePlus className="" />
                    </div>
                    History Section
                  </NavLink>
                  <NavLink
                    to={"/top-header-content"}
                    className="my-1 text-sm flex gap-2 items-center font-semibold dark:text-white p-2"
                  >
                    <div className="text-2xl group-hover:text-red-500 text-gray-800 dark:text-white">
                      <CiCirclePlus className="" />
                    </div>
                    Top Header
                  </NavLink>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <NavLink
              to={"/customer-support"}
              className="my-1 text-sm flex relative gap-2 items-center font-semibold dark:text-white p-2"
            >
              <div className="text-2xl group-hover:text-red-500 text-gray-800 dark:text-white">
                <MdOutlineMessage className="" />
              </div>
              C Message <small className="absolute right-2  bg-red-600 p-1 w-5 h-5 flex justify-center items-center rounded-full text-white">10</small>
            </NavLink>

            <NavLink
              to={"/admin-user"}
              className="my-1 text-sm flex relative gap-2 items-center font-semibold dark:text-white p-2"
            >
              <div className="text-2xl group-hover:text-red-500 text-gray-800 dark:text-white">
                <CiUser className="" />
              </div>
              User <small className="absolute right-2  bg-red-600 p-1 w-5 h-5 flex justify-center items-center rounded-full text-white">2</small>
            </NavLink>
            <NavLink
              to={"/add-user"}
              className="my-1 text-sm flex relative gap-2 items-center font-semibold dark:text-white p-2"
            >
              <div className="text-2xl group-hover:text-red-500 text-gray-800 dark:text-white">
                <HiOutlineUserAdd className="" />
              </div>
              Add User  
            </NavLink>

            <Link
              to={"https://e-shoes24.netlify.app"}
              target="_blank"
              className="my-1 shadow-lg shadow-gray-400 dark:shadow-slate-800 rounded-md text-sm flex relative gap-2 items-center font-semibold dark:text-white p-2 mt-5"
            >
              <img className="w-8" src="https://img.icons8.com/?size=256&id=VJz2Ob51dvZJ&format=png" alt="" />
              Website 
              <FaArrowUpRightFromSquare />
            </Link>
          </ul>
        </div>
      </div>

      {/* <div>
        <img className="w-2/12 animate-ping" src="https://shuffle.dev/static/img/chat-screen2.png" alt="" />
      </div> */}
    </div>
  );
}
