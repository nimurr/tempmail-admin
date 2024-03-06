export default function CustomerMessageDetails() {
    const handleGoBack=()=>{
        window.history.back()
    }
  return (
    <div>
      <h2 className="text-3xl font-semibold dark:text-white mb-10">
        Customer Message
      </h2>
      <br />
      <button onClick={handleGoBack} className="text-blue-500 underline">Go Back</button>
      <div className="my-10  bg-white dark:bg-gray-800 p-5 rounded dark:text-gray-300">
        <div className="flex items-center flex-wrap gap-3">
          <img
            className="w-14 h-14 rounded-full"
            src="https://i.ibb.co/whSjqyv/fshub-account-v2-CB432205751.png"
            alt=""
          />
          <div>
            <h2> Nimur Rahman Nerob</h2>
            <h2> nimurnerob404@gmail.com</h2>
          </div>
        </div>
        <br />
        <div>
            <h2>Hello,</h2>
            <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo velit similique facilis ipsum corporis dolor repudiandae dolores quidem deleniti eius. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus incidunt voluptatem molestiae hic similique dolorem ex neque aut et laboriosam? Expedita consequuntur laudantium sapiente delectus.</p>
            <br />
            <div>
                <h3 className="font-bold">Contact :</h3>
                <h2>+88 01708784404</h2>
                <h2>nimurnerob404@gmail.com</h2>
            </div>
        </div>
      </div>
    </div>
  );
}
