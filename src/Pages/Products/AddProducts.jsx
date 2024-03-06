import { Label } from "flowbite-react";

 
export default function AddProducts() {

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const images = form.images.files; // Accessing selected images

    // Logging each selected image to the console
    for (let i = 0; i < images.length; i++) {
      console.log(images[i].name);
    }
  };
  
  return (
    <div>
        <h2 className="text-3xl font-semibold dark:text-white mb-5"> Add Products </h2>
        <form onSubmit={handleAddProduct} className="bg-white dark:bg-[#1f2937] w-full sm:p-10 p-4 rounded-md">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="file-upload"
              value="Product Name"
              className="font-bold"
            />
          </div>
          <input
            type="text"
            required
            name=""
            className="w-full dark:text-white rounded dark:bg-transparent border-gray-400"
            placeholder="Product Name"
            id=""
          />
        </div>
        <div className="mt-10">
          <div className="mb-2 block">
            <Label
              htmlFor="file-upload"
              value="Product Category"
              className="font-bold"
            />
          </div>
          <input
            type="text"
            required
            name=""
            className="w-full dark:text-white rounded dark:bg-transparent border-gray-400"
            placeholder="Product Category"
            id=""
          />
        </div>
        <div className="mt-10">
          <div className="mb-2 block">
            <Label
              htmlFor="file-upload"
              value="Purchase price"
              className="font-bold"
            />
          </div>
          <input
            type="number"
            required
            name=""
            className="w-full dark:text-white rounded dark:bg-transparent border-gray-400"
            placeholder="Purchase price "
            id=""
          />
        </div>
        <div className="mt-10">
          <div className="mb-2 block">
            <Label
              htmlFor="Twitter"
              value="Selling Price"
              className="font-bold"
            />
          </div>
          <input
            type="number"
            required
            name=""
            className="w-full dark:text-white rounded dark:bg-transparent border-gray-400"
            placeholder="Selling Price"
            id=""
          />
        </div>
        <div className="mt-10">
          <div className="mb-2 block">
            <Label
              htmlFor="Twitter"
              value="Discount Price"
              className="font-bold"
            />
          </div>
          <input
            type="number"
            required
            name=""
            className="w-full dark:text-white rounded dark:bg-transparent border-gray-400"
            placeholder="Discount Price"
            id=""
          />
        </div>

        <div className="mt-10">
          <span className="font-semibold dark:text-white mb-2 block">Color Name</span>
          <select name="" id="" className="w-full bg-transparent dark:text-white">
            <option className="dark:bg-gray-800" value="Black">Black</option>
            <option className="dark:bg-gray-800" value="White">White</option>
            <option className="dark:bg-gray-800" value="Red">Red</option>
            <option className="dark:bg-gray-800" value="Green">Green</option>
            <optio className="dark:bg-gray-800" value="Blue">Blue</optio>
            <option className="dark:bg-gray-800" value="Yellow">Yellow</option>
          </select>
        </div>

        <div className="mt-10">
          <div className="mb-2 block">
            <Label
              htmlFor="Twitter"
              value="Product Size"
              className="font-bold"
            />
          </div>
          <input
            type="number"
            required
            name="productColor"
            className="w-full dark:text-white h-10 rounded dark:bg-transparent border-gray-400"
            placeholder="Product Size"
            id=""
          />
        </div>

        <div className="mt-10">
          <div className="mb-2 block">
            <Label
              htmlFor="Twitter"
              value="Product Quantity"
              className="font-bold"
            />
          </div>
          <input
            type="number"
            required
            name="productColor"
            className="w-full dark:text-white h-10 rounded dark:bg-transparent border-gray-400"
            placeholder="Product Quantity"
            id=""
          />
        </div>

        <div className="mt-10 visited:hidden">
          <div className="mb-2 block">
            <Label
              htmlFor="Twitter"
              value="Product Images"
              className="font-bold"
            />
          </div>
          <input
            type="file"
            required
            name="images"
            className="w-full border dark:text-white h-10 rounded dark:bg-transparent border-gray-400"
            placeholder="Product Images"
            multiple
            id=""
          />
        </div>

        <div>
          <input
            className="w-full block mt-5 cursor-pointer bg-blue-600 rounded text-white font-bold py-3"
            type="submit"
            value="Add Product"
          />
        </div>
      </form>
    </div>
  )
}
