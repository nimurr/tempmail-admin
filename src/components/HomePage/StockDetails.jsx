import { FaBookmark } from "react-icons/fa";

 

export default function StockDetails() {
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-5 dark:text-white">Stock Details</h2>
        <div className="grid xl:grid-cols-3 sm:grid-cols-2  lg:gap-4 gap-2">
        <div className="w-full flex justify-between h-auto rounded-md bg-violet-600 border-b-[25px] border-blue-400 px-5 sm:py-5 py-2 ">
          <div>
            <h2 className="sm:text-2xl font-semibold text-gray-200">Total Stock</h2>
            <h2 className="text-5xl font-semibold text-gray-200 mt-5">100</h2>
          </div>
          <div>
            < FaBookmark className="text-5xl  text-white"></ FaBookmark>
          </div>
        </div>

        <div className="w-full flex justify-between h-auto rounded-md bg-rose-700 border-b-[25px] border-pink-400 px-5 sm:py-5 py-2 ">
          <div>
            <h2 className="sm:text-2xl font-semibold text-gray-200">Stock Quantity</h2>
            <h2 className="text-5xl font-semibold text-gray-200 mt-5">10</h2>
          </div>
          <div>
            < FaBookmark className="text-5xl    text-white"></ FaBookmark>
          </div>
        </div>

        <div className="w-full flex justify-between h-auto rounded-md bg-lime-600 border-b-[25px] border-red-400 px-5 sm:py-5 py-2 ">
          <div>
            <h2 className="sm:text-2xl font-semibold text-gray-200">Total Item</h2>
            <h2 className="text-5xl font-semibold text-gray-200 mt-5">10 </h2>
          </div>
          <div>
            < FaBookmark className="text-5xl    text-white"></ FaBookmark>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
