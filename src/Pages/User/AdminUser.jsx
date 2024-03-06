import { Accordion } from "flowbite-react";
import { MdDeleteForever } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

export default function AdminUser() {
  const userDelete = () => {
    toast.success("User Delete Success !", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
    });
  };
  return (
    <div>
      <ToastContainer />
      <h2 className="text-3xl font-semibold dark:text-white mb-10">
        Customer Support
      </h2>
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-5 ">

        <div className="text-center bg-white py-10 relative dark:bg-gray-800 dark:text-gray-300 p-2 rounded">
          <MdDeleteForever
            onClick={userDelete}
            className="text-2xl absolute top-4 right-4 cursor-pointer"
          />
          <img
            className="w-14 h-14 mx-auto rounded-full"
            src="https://i.ibb.co/whSjqyv/fshub-account-v2-CB432205751.png"
            alt=""
          />
          <div>
            <h2 className="text-xl mt-4 font-semibold"> Nimur Rahman Nerob</h2>
            <h2> +88 01708784404</h2>
            <h2> nimurnerob404@gmail.com</h2>
            <Accordion className="mt-4">
              <Accordion.Panel>
                <Accordion.Title className="py-2 px-2">Rule</Accordion.Title>
                <Accordion.Content className="px-0 py-1">
                  <button className="hover:bg-blue-500 w-full py-2">
                    Admin
                  </button>
                  <br />
                  <button className="hover:bg-blue-500 w-full py-2">
                    Moderator
                  </button>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
        <div className="text-center bg-white py-10 dark:bg-gray-800 dark:text-gray-300 p-2 rounded">
          <img
            className="w-14 h-14 mx-auto rounded-full"
            src="https://i.ibb.co/whSjqyv/fshub-account-v2-CB432205751.png"
            alt=""
          />
          <div>
            <h2 className="text-xl mt-4 font-semibold"> Nimur Rahman Nerob</h2>
            <h2> +88 01708784404</h2>
            <h2> nimurnerob404@gmail.com</h2>
            <Accordion className="mt-4">
              <Accordion.Panel>
                <Accordion.Title className="py-2 px-2">Rule</Accordion.Title>
                <Accordion.Content className="px-0 py-1">
                  <button className="hover:bg-blue-500 w-full py-2">
                    Admin
                  </button>
                  <br />
                  <button className="hover:bg-blue-500 w-full py-2">
                    Moderator
                  </button>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>

        <div className="text-center bg-white py-10 dark:bg-gray-800 dark:text-gray-300 p-2 rounded">
          <img
            className="w-14 h-14 mx-auto rounded-full"
            src="https://i.ibb.co/whSjqyv/fshub-account-v2-CB432205751.png"
            alt=""
          />
          <div>
            <h2 className="text-xl mt-4 font-semibold"> Nimur Rahman Nerob</h2>
            <h2> +88 01708784404</h2>
            <h2> nimurnerob404@gmail.com</h2>
            <Accordion className="mt-4">
              <Accordion.Panel>
                <Accordion.Title className="py-2 px-2">Rule</Accordion.Title>
                <Accordion.Content className="px-0 py-1">
                  <button className="hover:bg-blue-500 w-full py-2">
                    Admin
                  </button>
                  <br />
                  <button className="hover:bg-blue-500 w-full py-2">
                    Moderator
                  </button>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
        <div className="text-center bg-white py-10 dark:bg-gray-800 dark:text-gray-300 p-2 rounded">
          <img
            className="w-14 h-14 mx-auto rounded-full"
            src="https://i.ibb.co/whSjqyv/fshub-account-v2-CB432205751.png"
            alt=""
          />
          <div>
            <h2 className="text-xl mt-4 font-semibold"> Nimur Rahman Nerob</h2>
            <h2> +88 01708784404</h2>
            <h2> nimurnerob404@gmail.com</h2>
            <Accordion className="mt-4">
              <Accordion.Panel>
                <Accordion.Title className="py-2 px-2">Rule</Accordion.Title>
                <Accordion.Content className="px-0 py-1">
                  <button className="hover:bg-blue-500 w-full py-2">
                    Admin
                  </button>
                  <br />
                  <button className="hover:bg-blue-500 w-full py-2">
                    Moderator
                  </button>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
        
      </div>
    </div>
  );
}
