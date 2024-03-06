import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddMenubar() {
  const [inputFields, setInputFields] = useState([""]);

  const addInputField = () => {
    if (inputFields.length < 10) {
      setInputFields([...inputFields, ""]);
    } else {
      return toast.error("Can't add More !", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
    }
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index] = event.target.value;
    setInputFields(values);
  };

  const handleMenuBarAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const mainmenu = form?.mainmenu?.value;
    const submenu1 = form.submenu1.value;
    const submenu2 = form?.submenu2?.value;
    const submenu3 = form?.submenu3?.value;
    const submenu4 = form?.submenu4?.value;
    const submenu5 = form?.submenu5?.value;
    const submenu6 = form?.submenu6?.value;
    const submenu7 = form?.submenu7?.value;
    const submenu8 = form?.submenu8?.value;
    const submenu9 = form?.submenu9?.value;
    const submenu10 = form?.submenu10?.value;

    if (mainmenu.length < 1) {
      return toast.error("Enter Main Menu !", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
    } else {
      const formdata = {
        mainmenu,
        submenu1e: submenu1 ? submenu1 : "",
        submenu2e: submenu2 ? submenu2 : "",
        submenu3e: submenu3 ? submenu3 : "",
        submenu4e: submenu4 ? submenu4 : "",
        submenu5e: submenu5 ? submenu5 : "",
        submenu6e: submenu6 ? submenu6 : "",
        submenu7e: submenu7 ? submenu7 : "",
        submenu8e: submenu8 ? submenu8 : "",
        submenu9e: submenu9 ? submenu9 : "",
        submenu10e: submenu10 ? submenu10 : ""
      };

      toast.success("Menu & submenu Added !", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
      console.log(formdata);
    }
  };

  return (
    <div className="bg-white p-10 dark:bg-gray-800 rounded-md">
      <ToastContainer />
      <h1 className="text-4xl font-semibold dark:text-white">Add Menubar </h1>
      <form onSubmit={handleMenuBarAdd}>
        <div className="my-10">
          <span className="mb-2 block dark:text-white">Main Menu</span>
          <div className="flex flex-wrap gap-4 items-center">
            <input
              type="text"
              name="mainmenu"
              className="bg-transparent p-2 border rounded dark:text-white"
              id=""
              placeholder="Main Menu field ..."
            />
          </div>
        </div>
        <span className="mb-2 block dark:text-white">Sub Menu</span>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2  gap-5">
          {inputFields.map((inputField, index) => (
            <input
              className="bg-transparent p-2 border rounded dark:text-white"
              key={index}
              value={inputField}
              onChange={(event) => handleInputChange(index, event)}
              placeholder={`Sub Menu ${index + 1}`}
              name={`submenu${index + 1}`}
            />
          ))}
          <span
            className={` bg-blue-600 ${
              inputFields.length >= 10 && "bg-blue-300 cursor-auto"
            } text-white py-2 rounded cursor-pointer flex justify-center items-center gap-2`}
            onClick={addInputField}
          >
            <IoMdAddCircleOutline className="text-xl" /> Add Submenu Field
          </span>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded gap-2 w-full block mt-5"
        >
          Add To Menu
        </button>
      </form>
    </div>
  );
}
