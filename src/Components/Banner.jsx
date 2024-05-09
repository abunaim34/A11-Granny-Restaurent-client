import { Link } from "react-router-dom";

const Banner = () => {
    return (

        <div className="w-full pt-16 bg-center bg-cover h-[500px] text-white" style={{ backgroundImage: 'url(https://i.ibb.co/XZPZgfv/2.jpg)' }}>
            <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                <div className="text-center space-y-4">
                    <h3 className="text-2xl italic font-semibold">Hello, We are <span className="text-blue-400">Granny</span></h3>
                    <h1 className="text-5xl italic font-serif font-black text-white lg:text-4xl">We Serve Quality Food</h1>
                    <p className="w-[550px]">Granny is a resturant, bar and coffee raostery located on Egypt. We have awesome recipes and the most talented chefs in town</p>
                    <Link to='/allFoods' className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#c59d5f] rounded hover:bg-[#c59d5f] group">
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#222222] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">SEE ALL FOODS</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;