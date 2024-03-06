import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow
} from "flowbite-react";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEye } from "react-icons/fa"; 
import Swal from "sweetalert2";

export default function CustomerSupport() {


  const handleCMessageDelete = ()=>{

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

    
  }

  return (
    <div>
      <h2 className="text-3xl font-semibold dark:text-white mb-10">
        Customer Support
      </h2>
      <div className="overflow-x-auto">
        <Table hoverable>
          <TableHead>
            <TableHeadCell>SL</TableHeadCell>
            <TableHeadCell>Image</TableHeadCell>
            <TableHeadCell>User name</TableHeadCell>
            <TableHeadCell>Sort Massage</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>
          </TableHead>
          <TableBody className="divide-y">
            <TableRow className="bg-gray-200 dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="font-semibold text-xl">1</TableCell>
              <img
                className="w-14 h-14 rounded-full mt-6"
                src="https://i.ibb.co/XVxTX2y/infinityrn-4-womens-road-running-shoes-k1-GRZP.webp"
                alt=""
              />
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"Adidas High Shoes"}
              </TableCell>
              <TableCell>Lorem ipsum dolor sit amet....</TableCell>
              <TableCell>
                <Link
                  to={`/customer-support/sdf`}
                  className="px-2 font-medium text-white py-2 rounded mr-2 hover:underline flex justify-center items-center gap-1 bg-blue-500  dark:text-white"
                >
                  <FaRegEye className="text-xl" /> Details
                </Link>
                <button onClick={handleCMessageDelete} className="px-2 w-full font-medium text-white py-2 rounded mr-2 hover:underline flex justify-center items-center gap-1 mt-1 bg-red-500 dark:text-white">
                  <MdDeleteForever className="text-xl" /> Delete
                </button>
              </TableCell>
            </TableRow>
            <TableRow className="bg-gray-200 dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="font-semibold text-xl">2</TableCell>
              <img
                className="w-14 h-14 rounded-full mt-6"
                src="https://i.ibb.co/XVxTX2y/infinityrn-4-womens-road-running-shoes-k1-GRZP.webp"
                alt=""
              />
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"Adidas High Shoes"}
              </TableCell>
              <TableCell>Lorem ipsum dolor sit amet....</TableCell>
              <TableCell>
                <Link
                  to={`/customer-support/sdf`}
                  className="px-2 font-medium text-white py-2 rounded mr-2 hover:underline flex justify-center items-center gap-1 bg-blue-500  dark:text-white"
                >
                  <FaRegEye className="text-xl" /> Details
                </Link>
                <button onClick={handleCMessageDelete} className="px-2 w-full font-medium text-white py-2 rounded mr-2 hover:underline flex justify-center items-center gap-1 mt-1 bg-red-500 dark:text-white">
                  <MdDeleteForever className="text-xl" /> Delete
                </button>
              </TableCell>
            </TableRow>
            <TableRow className="bg-gray-200 dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="font-semibold text-xl">3</TableCell>
              <img
                className="w-14 h-14 rounded-full mt-6"
                src="https://i.ibb.co/XVxTX2y/infinityrn-4-womens-road-running-shoes-k1-GRZP.webp"
                alt=""
              />
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"Adidas High Shoes"}
              </TableCell>
              <TableCell>Lorem ipsum dolor sit amet....</TableCell>
              <TableCell>
                <Link
                  to={`/customer-support/sdf`}
                  className="px-2 font-medium text-white py-2 rounded mr-2 hover:underline flex justify-center items-center gap-1 bg-blue-500  dark:text-white"
                >
                  <FaRegEye className="text-xl" /> Details
                </Link>
                <button onClick={handleCMessageDelete} className="px-2 w-full font-medium text-white py-2 rounded mr-2 hover:underline flex justify-center items-center gap-1 mt-1 bg-red-500 dark:text-white">
                  <MdDeleteForever className="text-xl" /> Delete
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
