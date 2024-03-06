import { Table } from "flowbite-react";
import { IoPrintOutline } from "react-icons/io5";

export default function OrderDetails() {
  const handleGoBack = () => {
    window.history.back();
  };
  const printInvoice = () => {
    window.print();
  };
  return (
    <div id="downloadInvoice">
      <h2 className="text-3xl font-semibold dark:text-white capitalize mb-5">
        order details
      </h2>
      <button onClick={handleGoBack} className="text-blue-500 underline">
        Go Back
      </button>
      <div className="dark:bg-gray-800 p-10 rounded bg-white mt-10 dark:text-gray-300">
        <div className="text-right ">
          <div className="flex justify-end mb-2 ">
            {/* <img
              className="w-14 dark:shadow-2xl	dark:shadow-slate-100	bg-transparent"
              src="https://i.ibb.co/W2rC0Ss/Adidas-logo.png"
              alt=""
            /> */}
            <span className="text-4xl font-extrabold dark:text-white">
              Adi<span className="text-rose-600">das</span>
            </span>
          </div>
          <h3 className="text-right">
            123 Anywhere St., Any City, ST 12345
            <br />
            Tel: +123-456-7890
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-5  my-10">
          <div className="">
            <h2 className="text-2xl font-semibold mb-2 dark:text-white">
              Customer Info :
            </h2>
            <div>
              <h2 className="dark:text-gray-300 mb-1">
                Name : Nimur Rahman Nerob
              </h2>
              <h2 className="dark:text-gray-300 mb-1">
                Email : nimurnerob404@gmail.com
              </h2>
              <h2 className="dark:text-gray-300 mb-1">
                Phone : +88 01708784404
              </h2>
              <h2 className="dark:text-gray-300 mb-1">
                Address : Block-E , Aftabnagor , Badda , Dhaka, Bngladesh
              </h2>
            </div>
          </div>
          <div className="sm:text-right">
            <h2 className="text-2xl font-semibold dark:text-white">
              Order Details
            </h2>
            <h2>Order ID : #A1DE5D2 </h2>
            <h2>Order Date : 05/03/24 </h2>
            <h2>Delivery Date : 05/03/24 </h2>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto">
            <Table>
              <Table.Head>
                <Table.HeadCell>Items</Table.HeadCell>
                <Table.HeadCell>Product Name</Table.HeadCell>
                <Table.HeadCell>Category</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
              </Table.Head>

              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>Shoes Heigh Nik</Table.Cell>
                  <Table.Cell>Adidas </Table.Cell>
                  <Table.Cell className="text-right">$2999</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>2</Table.Cell>
                  <Table.Cell>Shoes Heigh Nik</Table.Cell>
                  <Table.Cell>Adidas </Table.Cell>
                  <Table.Cell className="text-right">$2999</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white  dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>3</Table.Cell>
                  <Table.Cell>Shoes Heigh Nik</Table.Cell>
                  <Table.Cell>Adidas </Table.Cell>
                  <Table.Cell className="text-right">$2999</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
          <hr />
          <br />
          <h2 className="flex justify-end text-xl font-bold dark:text-gray-400">
            Total : $2000{" "}
          </h2>

          <br />
          <br />
          <p className="text-center mt-5 text-gray-500">
            If you have any question please contact : hello@reallygreatsite.com
          </p>
          <div className="flex justify-end">
            <button
              className="  bg-green-600 text-white rounded-md flex justify-between p-2 items-center gap-2"
              onClick={printInvoice}
            >
               Print Invoice <IoPrintOutline className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
