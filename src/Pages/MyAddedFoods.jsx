import { useEffect, useState } from "react";
import { MdBrowserUpdated } from "react-icons/md";
import useAxios from "../Hooks/useAxios";
import { Helmet } from "react-helmet-async";
import { HashLoader } from "react-spinners";
import useAuth from "../Hooks/useAuth";
import { Link } from 'react-router-dom'

const MyAddedFoods = () => {
    const [foods, setFoods] = useState([])
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()
    const axiosSecure = useAxios()

    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            const { data } = await axiosSecure(`/foods/${user?.email}`, {withCredentials: true})
            setFoods(data)
            setLoading(false)
        }
        getData()
    }, [axiosSecure, user])
    return (
        <div className="bg-black py-24 pt-28">
            <Helmet>
                <title>GRANNY | ADD A FOOD ITEMS</title>
            </Helmet>
            <div className="text-center">
                <h2 className="text-5xl font-bold">My Added Food Items</h2>
                <p className="w-[550px] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illum voluptate quis. Voluptates totam culpa .</p>
            </div>
            {
                loading ? <div className="flex items-center py-20 justify-center"><HashLoader color="#36d7b7" /></div> :
                    <div className="container mt-8 p-2 mx-auto rounded-lg sm:p-4 bg-[#1B1616] dark:text-gray-800">
                        <div className="overflow-x-auto">
                            <table className="min-w-full p-5 text-sm border">
                                <thead className="bg-black">
                                    <tr className="text-left text-base font-bold">
                                        <th className="p-5">Name</th>
                                        <th className="p-5">Made By</th>
                                        <th className="p-5">Category</th>
                                        <th className="p-5">Quantity</th>
                                        <th className="p-5">Price</th>
                                        <th className="p-5">Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        foods?.map((food, i) => (food.quantity || food.price ) &&  <tr key={i} className="border-y border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                            <td className="p-4">
                                                <p>{food.name}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{food.made_by}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{food.category}</p>
                                            </td>
                                            <td className="p-3 font-sans pl-10">
                                                <p>{food.quantity}</p>
                                            </td>
                                            <td className="p-3 font-sans">
                                                <p>{food.price}TK</p>
                                            </td>
                                            <td className="p-3 pl-8">
                                                <Link to={`/updateFood/${food._id}`} className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                    <MdBrowserUpdated className="text-3xl" />
                                                </Link>
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
        </div>
    );
};

export default MyAddedFoods;