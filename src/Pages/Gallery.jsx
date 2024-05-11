import { useEffect, useState } from "react";
import GalleryCart from "../Components/GalleryCart";
import useAxios from "../Hooks/useAxios";
import { Helmet } from "react-helmet-async";
import { HashLoader } from "react-spinners";

const Gallery = () => {
    const [galleries, setGalleries] = useState([])
    const [loading, setLoading] = useState(false)
    const axiosSecure = useAxios()

    useEffect(() => {
        setLoading(true)
        const getData = async() => {
            const {data} = await axiosSecure('/foods')
            setGalleries(data)
            setLoading(false)
        }
        getData()
    }, [axiosSecure])
    return (
        <div className="bg-black pt-16 font-serif">
            <Helmet>
                <title>GRANNY | GALLERY</title>
            </Helmet>
            <div className="w-full bg-center bg-cover h-[300px] text-white" style={{ backgroundImage: 'url(https://i.ibb.co/X4n4z4B/6.jpg)' }}>
                <div className="flex flex-col text-center space-y-2 items-center justify-center w-full h-full bg-gray-900/40">
                    <h1 className="md:text-5xl pt-3 text-2xl italic md:font-black font-bold text-white lg:text-4xl">GRANNY RESTURANT GALLERY</h1>
                </div>
            </div>
            <div className="grid py-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 md:px-5 lg:px-20">
                {
                   loading ? <HashLoader color="#36d7b7" />
                   : galleries.map((gallery, i) => <GalleryCart key={i} gallery={gallery} />)
                }
            </div>
            <div className="text-center py-5">
                <label htmlFor="my_modal_6" className="relative lg:w-1/3 md:w-1/2 w-[300px]  inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group ">
                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[#c59d5f] via-[#1B1616] to-[#c59d5f] group-hover:opacity-100"></span>
                    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                    <span className="relative">Add</span>
                </label>
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal bg-[#1B1616]" role="dialog">
                    <div className="modal-box bg-[#1B1616]">
                        <div className="px-6 py-4">
                            <div className="flex justify-center mx-auto">
                                <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
                            </div>
                            <h3 className="mt-3 text-xl font-medium text-center dark:text-gray-200">Add Gellary</h3>
                            <form>
                                <div className="w-full mt-4">
                                    <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="Enter your Full Name" aria-label="Enter your Full Name" />
                                </div>

                                <div className="w-full mt-4">
                                    <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="Image URL" aria-label="Image URL" />
                                </div>
                                <div className="w-full mt-4">
                                    <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="Enter your Feedback" aria-label="Password" />
                                </div>
                            </form>
                        </div>
                        <label htmlFor="my_modal_6" className="relative md:w-[430px]  w-[200px] inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group ">
                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[#c59d5f] via-[#1B1616] to-[#c59d5f] group-hover:opacity-100"></span>
                            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                            <span className="relative">Add</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;