import { MdOutlineMail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="absolute top-0 left-0 z-50 backdrop-blur-lg w-[98vw] h-full">
      <div className="dark:bg-white bg-gray-800 dark:text-gray-300 mt-10 sm:mt-32 sm:w-[500px] w-full p-5 rounded-md mx-auto ">
        <img
          className="w-20 mx-auto mb-10"
          src="https://i.ibb.co/whSjqyv/fshub-account-v2-CB432205751.png"
          alt=""
        />
        <form action="">
          <span className="mt-5 block text-white dark:text-black ">Email</span>
          <label
            className="border  bg-transparent text-white dark:text-black overflow-hidden rounded flex items-center"
            htmlFor=""
          >
            <MdOutlineMail className="mx-3 text-xl w-5" />
            <input
              className="border-0 bg-transparent text-white dark:text-black w-full border-l "
              type="email"
              placeholder="Enter Your Email"
            />
          </label>
          <span className="mt-5 block text-white dark:text-black ">Password</span>
          <label
            className="border bg-transparent text-white dark:text-black overflow-hidden rounded  flex items-center"
            htmlFor=""
          >
            <TbPasswordFingerprint className="mx-3 text-xl w-5" />
            <input
              className="border-0 bg-transparent text-white dark:text-black w-full border-l "
              type="password"
              placeholder="Enter password"
            />
          </label>
          <button
            type="submit"
            className="my-2 p-2 w-full bg-blue-600 rounded text-white"
          >
            Login
          </button>
          <br />
          <p className="font-semibold text-white dark:text-black">
            Have not a Account ?{" "}
            <Link className="text-blue-500" to={"/register"}>
              please Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
