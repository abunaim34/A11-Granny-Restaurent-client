
const AllPageTitle = () => {
    return (
        <div className="bg-black pt-16">
            <div className="w-full bg-center bg-cover h-[300px] text-white" style={{ backgroundImage: 'url(https://i.ibb.co/X4n4z4B/6.jpg)' }}>
                <div className="flex flex-col text-center space-y-2 items-center justify-center w-full h-full bg-gray-900/40">
                    <h1 className="md:text-5xl pt-3 text-2xl italic md:font-black font-bold text-white lg:text-4xl">GRANNY RESTURANT All FOODS</h1>
                    <form>
                        <div className="flex overflow-hidden border rounded-lg  lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                            <input className="px-6 w-[170px] md:w-full py-2 text-gray-700 rounded-l-lg placeholder-gray-500 bg-white outline-none  focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="title" placeholder="Search your Foods" aria-label="Search your Foods" />

                            <button className="relative  inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#c59d5f] rounded hover:bg-[#c59d5f] group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#222222] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white font-bold">Search</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AllPageTitle;