import { Avatar, DarkThemeToggle, Dropdown, Flowbite } from "flowbite-react";
import { FaRegUser } from "react-icons/fa6";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdLockOutline } from "react-icons/md";

export default function UserMenu() {
  return (
    <div className="flex justify-between py-5 pl-3 lg:pl-0 pr-2">
      {/*=================== left side fake email ===========*/}
      <p className="dark:text-white flex items-center gap-2">
        <h2 className="font-bold sm:text-xl text-xl">Dashboard</h2>
      </p>

      {/*======================== right side user information ==========================*/}
      <div className="flex items-center sm:gap-4 gap-2">
        <Flowbite className="text-white border">
          <DarkThemeToggle></DarkThemeToggle>
        </Flowbite>


        <Dropdown
          className=""
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://i.ibb.co/whSjqyv/fshub-account-v2-CB432205751.png"
              rounded
              className="z-10"
            />
          }
        >
          <Link to={"/profile"}>
            <Dropdown.Item className="flex items-center gap-3 my-1">
              <FaRegUser className="text-xl" /> My Profile
            </Dropdown.Item>
          </Link>

          <Link to={'/change-password'}>
            <Dropdown.Item className="flex items-center gap-3 my-1">
              <MdLockOutline className="text-xl" /> Change Password
            </Dropdown.Item>
          </Link>

          <Dropdown.Item className="flex items-center gap-3">
            <FaArrowRightFromBracket className="text-xl" /> Log Out
          </Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
}
