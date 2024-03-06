import { Label } from "flowbite-react";

export default function SocialLink() {
  return (
    <div>
      <form className="bg-white dark:bg-[#1f2937] w-full sm:p-10 p-4 rounded-md">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="file-upload"
              value="Facebook Link"
              className="font-bold"
            />
          </div>
          <input
            type="text"
            required
            name=""
            className="w-full dark:text-white rounded dark:bg-transparent border-gray-400"
            placeholder="Facebook Link            "
            id=""
          />
        </div>
        <div className="mt-10">
          <div className="mb-2 block">
            <Label
              htmlFor="file-upload"
              value="Instagram"
              className="font-bold"
            />
          </div>
          <input
            type="text"
            required
            name=""
            className="w-full dark:text-white rounded dark:bg-transparent border-gray-400"
            placeholder="Instagram Link "
            id=""
          />
        </div>
        <div className="mt-10">
          <div className="mb-2 block">
            <Label
              htmlFor="Twitter"
              value="Twitter Link"
              className="font-bold"
            />
          </div>
          <input
            type="text"
            required
            name=""
            className="w-full dark:text-white rounded dark:bg-transparent border-gray-400"
            placeholder="Twitter Link"
            id=""
          />
        </div>
        <div className="mt-10">
          <div className="mb-2 block">
            <Label
              htmlFor="Twitter"
              value="Youtube Link"
              className="font-bold"
            />
          </div>
          <input
            type="text"
            required
            name=""
            className="w-full dark:text-white rounded dark:bg-transparent border-gray-400"
            placeholder="Youtube Link"
            id=""
          />
        </div>
        <div>
          <input
            className="w-full block mt-5 cursor-pointer bg-blue-600 rounded text-white font-bold py-3"
            type="submit"
            value="Update"
          />
        </div>
      </form>
    </div>
  );
}
