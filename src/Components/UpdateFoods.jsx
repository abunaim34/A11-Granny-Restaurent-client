import axios from "axios";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useEffect } from "react";
import useAxios from "../Hooks/useAxios";
import { useParams } from "react-router-dom";
import { useState } from "react";

const UpdateFoods = () => {
    const [food, setFood] = useState([])
    const axiosSecure = useAxios()
    const {id} = useParams()
    const {_id, name, price, buyer_name, buyer_email, quantity, image, description} = food || {}

    const handleUpdateFoodItem = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        buyer_name;
        buyer_email;
        const quantity = form.quantity.value
        const food_origin = form.food_origin.value
        const category = form.category.value
        const image = form.image.value
        const description = form.description.value
        const food = {name, price,  buyer_name, buyer_email, food_origin, quantity, category, image, description}

        axios.put(`https://granny-resturant-server.vercel.app/updatefood/${_id}`, food, {withCredentials: true})
        .then(data => {
            const food = data.data
            if(food.modifiedCount > 0){
                toast.success('Update Food successfully')
            }
        })
    }

    useEffect(() => {
        const getData = async() => {
            const {data} =await axiosSecure(`/food/${id}`)
            setFood(data);
        }
        getData()
    }, [axiosSecure, id])
    return (
        <div className=" lg:px-24 py-20 bg-black text-white">
            <Helmet>
                <title>GRANNY | UPDATE FOOD ITEMS</title>
            </Helmet>
            <div className="text-center  mx-auto mb-8 md:px-4">
                <h2 className="text-3xl pb-3 font-bold uppercase">Update A Food Item</h2>
                <p className="w-[650px] mx-auto">This is the UPDATE A FOOD ITEM page, here you can update the options for each food item you have added</p>
            </div>
            <form onSubmit={handleUpdateFoodItem} className="p-4">
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered bg-gray-600 text-white w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-white">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered font-sans bg-gray-600 text-white w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Buyer Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text"  name="buyer_name" value={buyer_name} placeholder="Buyer Name" className="input bg-gray-600 text-white input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-white">Buyer Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email"  name="buyer_email" value={buyer_email} placeholder="Email" className="input bg-gray-600 input-bordered text-white w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Quantity" className="input text-white input-bordered bg-gray-600 w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-white">Food Origin</span>
                        </label>
                        <select name="food_origin" className="select select-bordered text-white bg-gray-600 w-full ">
                            <option disabled selected>Select your Food Origin</option>
                            <option>Bangladesh</option>
                            <option>Mexico</option>
                            <option>United States</option>
                            <option>Italy</option>
                            <option>Thailand</option>
                            <option>Afghanistan</option>
                        </select>
                    </div>
                </div>
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Category</span>
                        </label>
                        <select name="category" className="select select-bordered text-white bg-gray-600 w-full ">
                            <option disabled selected>Select your Food Category</option>
                            <option>BBQ</option>
                            <option>Chicken</option>
                            <option>Pizza</option>
                            <option>Salads</option>
                            <option>Seafood</option>
                            <option>Burgers</option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-white">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" defaultValue={image} placeholder="Image URL" className="text-white input bg-gray-600 input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Description</span>
                        </label>
                        <label className="input-group">
                            <textarea name="description" placeholder="Description" defaultValue={description} rows="5" className="border-2 p-2 rounded-md bg-gray-600 text-white w-full"></textarea>
                        </label>
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
                    <span className="relative">Add Food</span>
                </button>
            </form>
        </div>
    );
};

export default UpdateFoods;