import { Label } from "flowbite-react";

 
export default function Contact() {
  return (
    <div>
      <form className="bg-white dark:bg-[#1f2937] sm:p-10 p-5 rounded">
        <div className="">
          <div className="mb-2 block">
            <Label
              htmlFor="file-upload"
              value="Contact Support Email"
              className="font-bold"
            />
          </div>
          <textarea
            rows={1}
            type="text"
            required
            name=""
            className="w-full dark:text-white rounded dark:bg-transparent border-gray-400"
            placeholder="Support Email"
            id=""
          />
        </div>

        <div className="mt-6">
          <div className="mb-2 block">
            <Label
              htmlFor="file-upload"
              value="Contact Support Discord"
              className="font-bold"
            />
          </div>
          <textarea
            rows={1}
            type="text"
            required
            name=""
            className="w-full dark:text-white rounded dark:bg-transparent border-gray-400"
            placeholder="Support Discord"
            id=""
          />
        </div>

        <div className="mt-6">
          <div className="mb-2 block">
            <Label
              htmlFor="file-upload"
              value="Contact Support Telegram"
              className="font-bold"
            />
          </div>
          <textarea
            rows={1}
            type="text"
            required
            name=""
            className="w-full dark:text-white rounded dark:bg-transparent border-gray-400"
            placeholder="Support Telegram"
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
  )
}
