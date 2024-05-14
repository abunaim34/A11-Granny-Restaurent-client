import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import { Helmet } from "react-helmet-async";
import { HashLoader } from "react-spinners";
import axios from "axios";

const SingleFood = () => {
    const { name } = useParams()
    const [foods, setFoods] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    // const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const food = foods.find(food => food.name === name)
    const { _id, image, price, quantity, food_origin, buyer_name, description, made_by, category } = food || {}

    const axiosSecure = useAxios()
    const navigate = useNavigate()

    const handlePurchase = (_id) => {
        if (quantity <= 0) {
          return  alert('0 theke kom')  
        }
        navigate(`/purchase/${_id}`)
    }

    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            const { data } = await axiosSecure('/foods')
            setFoods(data)
            setLoading(false)
        }
        getData()
    }, [axiosSecure])

    useEffect(() => {
        axios('https://granny-resturant-server.vercel.app/purchase')
            .then(data => {
                setTotalCount(data.data)
            })
        // axios(`http://localhost:5000/purchase/${food.name}`)
        //     .then(data => {
        //         console.log(data.data);
        //     })
    }, [])

    return (
        <>
            {
                loading ? <HashLoader color="#36d7b7" /> :
                    <div className="bg-black py-24 font-serif">
                        <Helmet>
                            <title>GRANNY | {name}</title>
                        </Helmet>
                        <div className="max-w-2xl relative p-3 mx-auto overflow-hidden text-white bg-[#1B1616] rounded-lg shadow-md dark:bg-gray-800">
                            <img className="object-cover rounded-xl p-2" src={image} alt="Article" />
                            <div className="text-white rounded-sm absolute top-5 right-5 bg-black">
                                <h4 className="font-medium p-1">Purchase Count : {totalCount.length}</h4>
                            </div>
                            <div className="pb-5">
                                <div>
                                    <p>Quantity: {quantity}</p>
                                    <h2 className="block mt-2 md:text-3xl text-xl font-semibold text-white transition-colors duration-300 transform dark:text-white" role="link">{name}</h2>
                                    <div className="flex justify-between">
                                        <p className="mt-2 text-xl text-white dark:text-gray-400">Category: {category}</p>
                                        <p className="mt-2 text-xl text-white font-sans pr-5 dark:text-gray-400">Price: {price}TK</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-between">
                                        <h2>Made By: {made_by || buyer_name}</h2>
                                        <p className="pr-5">Origin: {food_origin}</p>
                                    </div>
                                </div>
                                <p className="mt-2 border-t py-3 text-white dark:text-gray-400"><span className="font-semibold">Description:</span> {description}</p>
                            </div>
                            {
                                <button onClick={() => handlePurchase(_id)} className="relative w-full inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[#c59d5f] via-[#1B1616] to-[#c59d5f] group-hover:opacity-100"></span>
                                    {/* <!-- Top glass gradient --> */}
                                    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                    {/* <!-- Bottom gradient --> */}
                                    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                    {/* <!-- Left gradient --> */}
                                    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                    {/* <!-- Right gradient --> */}
                                    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                    <span className="relative">Purchase</span>
                                </button>
                            }
                        </div>
                    </div>

            }
        </>
    );
};

export default SingleFood;