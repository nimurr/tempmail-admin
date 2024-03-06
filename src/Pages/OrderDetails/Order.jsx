
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';
import { Link } from 'react-router-dom';
export default function Order() {
  return (
    <div>
        <h2 className="text-3xl font-semibold mb-10 capitalize dark:text-white"> order Details</h2>
        <div className="overflow-x-auto">
        <Table hoverable>
          <TableHead>
            <TableHeadCell>SL</TableHeadCell>
            <TableHeadCell>Image</TableHeadCell>
            <TableHeadCell>Product name</TableHeadCell>
            <TableHeadCell>Category</TableHeadCell>
            <TableHeadCell>Model</TableHeadCell>
            <TableHeadCell>Status</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>
          </TableHead>
          <TableBody className="divide-y">
            <TableRow className="bg-gray-200 dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="font-semibold text-xl">1</TableCell>
              <img
                className="w-20 mt-5"
                src="https://i.ibb.co/XVxTX2y/infinityrn-4-womens-road-running-shoes-k1-GRZP.webp"
                alt=""
              />
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"Adidas High Shoes"}
              </TableCell>
              <TableCell>Shoes</TableCell>
              <TableCell>A85S2</TableCell>
              <TableCell className=' '><span className='bg-blue-600 p-1 rounded text-white'>Pending..</span></TableCell>
              <TableCell>$299</TableCell>
              <TableCell>
                <Link to={`/order/${1}`} className="px-2 font-medium text-white py-2 rounded mr-2 hover:underline flex justify-center items-center gap-1 bg-blue-500  dark:text-white">
                  {" "} Details
                </Link>
                <button className="px-2 font-medium text-white py-2 rounded mr-2 hover:underline flex justify-center items-center gap-1 mt-1 bg-green-500 dark:text-white">
                   Accept
                </button>
                <button className="px-2 font-medium text-white py-2 rounded mr-2 hover:underline flex justify-center items-center gap-1 mt-1 bg-red-500 dark:text-white">
                   Cancel
                </button>
              </TableCell>
            </TableRow>
            <TableRow className="bg-gray-200 dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="font-semibold text-xl">2</TableCell>
              <img
                className="w-20 mt-5"
                src="https://i.ibb.co/2d8fSrn/Samba-OG-Shoes-White-IG1025-01-standard.jpg"
                alt=""
              />
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"Adidas High Shoes"}
              </TableCell>
              <TableCell>Shoes</TableCell>
              <TableCell>B635SDF</TableCell>
              <TableCell className=' '><span className='bg-green-600 p-1 rounded text-white'>Success </span></TableCell>
              <TableCell>$299</TableCell>
              <TableCell>
                <button className="px-2 font-medium text-white py-2 rounded mr-2 hover:underline flex justify-center items-center gap-1 bg-blue-500  dark:text-white">
                  {" "} Details
                </button>
                <button className="px-2 font-medium text-white py-2 rounded mr-2 hover:underline flex justify-center items-center gap-1 mt-1 bg-green-500 dark:text-white">
                   Accept
                </button>
                <button className="px-2 font-medium text-white py-2 rounded mr-2 hover:underline flex justify-center items-center gap-1 mt-1 bg-red-500 dark:text-white">
                   Cancel
                </button>
              </TableCell>
            </TableRow>
            <TableRow className="bg-gray-200 dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="font-semibold text-xl">3</TableCell>
              <img
                className="w-20 mt-5"
                src="https://i.ibb.co/MBPt8VZ/YEEZY-BOOST-350-V2-Grey-IF3219-01-standard.jpg"
                alt=""
              />
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"Adidas High Shoes"}
              </TableCell>
              <TableCell>Shoes</TableCell>
              <TableCell>C4SD4</TableCell>
              <TableCell className=' '><span className='bg-red-600 p-1 rounded text-white'>Cancel</span></TableCell>
              <TableCell>$299</TableCell>
              <TableCell>
                <button className="px-2 font-medium text-white py-2 rounded mr-2 hover:underline flex justify-center items-center gap-1 bg-blue-500  dark:text-white">
                  {" "} Details
                </button>
                <button className="px-2 font-medium text-white py-2 rounded mr-2 hover:underline flex justify-center items-center gap-1 mt-1 bg-green-500 dark:text-white">
                   Accept
                </button>
                <button className="px-2 font-medium text-white py-2 rounded mr-2 hover:underline flex justify-center items-center gap-1 mt-1 bg-red-500 dark:text-white">
                   Cancel
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
