import { Label } from "flowbite-react";

export default function SettingHome() {
  return (
    <form className="bg-white dark:bg-[#1f2937] w-full sm:p-10 p-4 rounded-md">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="file-upload"
            value="Header Logo"
            className="font-bold"
          />
        </div>
        <input type="file" required className="w-full border rounded-md dark:text-white" />
      </div>
      <div className="mt-10">
        <div className="mb-2 block">
          <Label htmlFor="file-upload" value="Favicons" className="font-bold" />
        </div>
        <input type="file" required className="w-full border rounded-md dark:text-white" />
      </div>
      <div className="mt-10">
        <div className="mb-2 block">
          <Label htmlFor="file-upload" value="Site Title" className="font-bold" />
        </div>
        <input type="text" required name="" className="w-full dark:text-white rounded dark:bg-transparent border-gray-400" placeholder="site title" id="" />
      </div>
      <div>
        <input
          className="w-full block mt-5 cursor-pointer bg-blue-600 rounded text-white font-bold py-3"
          type="submit"
          value="Update"
        />
      </div>
    </form>
  );
}
