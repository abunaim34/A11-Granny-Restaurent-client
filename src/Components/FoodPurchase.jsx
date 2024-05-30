import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import useAxios from "../Hooks/useAxios";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";


const FoodPurchase = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [purchaseFoods, setPurchaseFoods] = useState([])
    const [quantityCount, setQuantityCount] = useState(0)
    const { user } = useAuth()
    const axiosSecure = useAxios()
    const { _id } = useParams()
    const purchaseFood = purchaseFoods.find(food => food._id == _id)
    const { image, email, category, quantity: foodQuantity, food_origin, made_by } = purchaseFood || {}

    const handleAddPurchase = (e) => {
        e.preventDefault()
        if (purchaseFoods.length <= 0) {
            return toast.error('Action not permitted!')
        }
        if (email === user?.email) {
            return toast.error('Action not permitted!')
        }
        const form = e.target;
        const name = form.name.value
        const price = form.price.value
        image
        category
        food_origin
        made_by
        const buyer_name = user?.displayName
        const buyer_email = user?.email
        const quantity = form.quantity.value
        if (foodQuantity <= quantityCount.length) return toast.error('Food is not available, please go back')
        else if (quantity > foodQuantity) return toast.error(`Please make your quantity at least ${foodQuantity} equal to this and try again`)
        const date = startDate.toLocaleDateString()
        const purchaseItem = { name, price, made_by, image, category, buyer_name, buyer_email, food_origin, quantity, date }

        e.target.reset()
        axios.post('https://granny-resturant-server.vercel.app/purchase', purchaseItem)
        .then(data => {
            toast.success('Your food order is successful', data.data)
        })
    }

    useEffect(() => {
        const getData = async () => {
            const { data } = await axiosSecure(`/foods`, { withCredentials: true })
            setPurchaseFoods(data)
        }
        getData()
        axios(`https://granny-resturant-server.vercel.app/purchase/${category}`)
            .then(data => {
                setQuantityCount(data.data);
            })
    }, [axiosSecure, category])
    return (
        <div className=" lg:px-24 py-20 bg-black text-white">
            <Helmet>
                <title>GRANNY | PURCHASE FOOD</title>
            </Helmet>
            <div className="text-center md:px-4">
                <h2 className="md:text-5xl text-3xl font-bold uppercase">Purchase your favorite Foods</h2>
            </div>
            <form onSubmit={handleAddPurchase} className="p-4">
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered bg-gray-600 w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-white">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered font-sans bg-gray-600 w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Buyer Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" value={user?.displayName} name="buyer_name" placeholder="Buyer Name" className="input bg-gray-600 input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-white">Buyer Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" value={user?.email} name="buyer_email" placeholder="Email" className="input bg-gray-600 input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex md:gap-2 lg:gap-0 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered bg-gray-600 w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-white">Date</span>
                        </label>
                        <DatePicker className="bg-gray-600 p-3 rounded-md w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </div>

                <button className="relative w-full inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
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
            </form>
        </div>
    );
};

export default FoodPurchase;