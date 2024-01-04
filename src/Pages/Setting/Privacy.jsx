import { Label } from "flowbite-react";

export default function Privacy() {
  return (
    <div>
      <form className="bg-white dark:bg-[#1f2937] sm:p-10 p-5 rounded">
        <div className="">
          <div className="mb-2 block">
            <Label
              htmlFor="file-upload"
              value="Privacy Title"
              className="font-bold"
            />
          </div>
          <textarea
            rows={1}
            type="text"
            required
            name=""
            className="w-full dark:text-white rounded dark:bg-transparent border-gray-400"
            placeholder="site title"
            id=""
          />
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label
              htmlFor="file-upload"
              value="Privacy Description"
              className="font-bold"
            />
          </div>
          <textarea
            rows={10}
            type="text"
            required
            name=""
            className="w-full dark:text-white rounded dark:bg-transparent border-gray-400"
            placeholder="site title"
            id=""
          />
        </div>
        <div>
          <input
            className="w-full block mt-5 bg-blue-600 rounded text-white font-bold py-3 cursor-pointer"
            type="submit"
            value="Update"
          />
        </div>
      </form>
    </div>
  );
}
