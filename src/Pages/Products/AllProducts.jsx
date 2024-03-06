import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow
} from "flowbite-react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Swal from "sweetalert2";


export default function AllProducts() {

  const deleteProduct =()=>{
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
      <div className="sm:flex justify-between items-center gap-4 mb-10 ">
        <h1 className="text-3xl dark:text-white">All Products</h1>
        <label className="border relative block rounded overflow-hidden">
          <input className="bg-transparent p-2 dark:text-white border-0" type="text" placeholder="Search Products" />
          <FiSearch className="dark:text-white absolute top-3 right-4" />
        </label>
      </div>
      <div className="overflow-x-auto">
        <Table hoverable>
          <TableHead>
            <TableHeadCell>SL</TableHeadCell>
            <TableHeadCell>Image</TableHeadCell>
            <TableHeadCell>Product name</TableHeadCell>
            <TableHeadCell>Category</TableHeadCell>
            <TableHeadCell>Quantity</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>
          </TableHead>
          <TableBody className="divide-y">
            <TableRow className="bg-gray-200 dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="font-semibold text-xl">1</TableCell>
              <img
                className="w-20 h-full"
                src="https://i.ibb.co/XVxTX2y/infinityrn-4-womens-road-running-shoes-k1-GRZP.webp"
                alt=""
              />
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"Adidas High Shoes"}
              </TableCell>
              <TableCell>Shoes</TableCell>
              <TableCell>150 pc</TableCell>
              <TableCell>$299</TableCell>
              <TableCell>
                <button className="px-2 font-medium text-white py-2 rounded mr-2 hover:underline flex justify-center items-center gap-1 bg-blue-500  dark:text-white">
                  {" "}
                  <FaEdit /> Edit
                </button>
                <button onClick={deleteProduct} className="px-2 font-medium text-white py-2 rounded mr-2 hover:underline flex justify-center items-center gap-1 mt-1 bg-red-500 dark:text-white">
                  {" "}
                  <MdDeleteForever /> Delete
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
