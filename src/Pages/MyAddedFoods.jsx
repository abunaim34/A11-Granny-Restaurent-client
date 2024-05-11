

const MyAddedFoods = () => {
    return (
        <div className="bg-black py-16 pt-28">
            <div className="container p-2 mx-auto rounded-lg sm:p-4 bg-[#1B1616] dark:text-gray-800">
                <div className="overflow-x-auto">
                    <table className="min-w-full p-5 text-sm border">
                        <thead className="bg-black dark:bg-gray-300">
                            <tr className="text-left text-base font-bold">
                                <th className="p-5">Name</th>
                                <th className="p-5">Buyer Email</th>
                                <th className="p-5">Category</th>
                                <th className="p-5">Quantity</th>
                                <th className="p-5">Price</th>
                                <th className="p-5">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                <td className="p-4">
                                    <p>Margherita Pizza</p>
                                </td>
                                <td className="p-3">
                                    <p>farhanadnanfarabi@gmail.com</p>
                                </td>
                                <td className="p-3">
                                    <p>Seafood</p>
                                </td>
                                <td className="p-3 font-sans">
                                    <p>0.22</p>
                                </td>
                                <td className="p-3 font-sans">
                                    <p>15,7Tk</p>
                                </td>
                                <td className="p-3 pl-18">
                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-8 h-8">
                                            <path  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAddedFoods;