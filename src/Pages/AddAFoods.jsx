import { Helmet } from "react-helmet-async";
import useAuth from "../Hooks/useAuth";
import axios from 'axios'
import toast from "react-hot-toast";

const AddAFoods = () => {
    const { user } = useAuth()

    const handleAddFoodItem = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const price = form.price.value
        const buyer_name = user?.displayName
        const buyer_email = user?.email
        const quantity = form.quantity.value
        const food_origin = form.food_origin.value
        const category = form.category.value
        const image = form.image.value
        const description = form.description.value
        const food = {name, price, buyer_name, buyer_email, food_origin, quantity, category, image, description}
        console.log(food);


        axios.post('https://granny-resturant-server.vercel.app/foods', food)
        .then(data => {
            const food = data.data
            console.log(food);
            if(food.insertedId){
                toast.success('Add Food successfully')
            }
        })
    }

    return (
        <div className=" lg:px-24 py-20 bg-black text-white">
            <Helmet>
                <title>GRANNY | ADD A FOOD ITEMS</title>
            </Helmet>
            <div className="text-center  mx-auto mb-8 md:px-4">
            <h2 className="text-3xl pb-3 font-bold">Add A Food Item</h2>
            <p className="w-[650px] mx-auto">This is the Add Art & Craft Items page here if you want you can add my categories based on the categories fixed by us as per your choice So lets go and add your Craft Items.</p>
            </div>
            <form onSubmit={handleAddFoodItem} className="p-4">
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered bg-gray-600 text-white w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-white">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered font-sans bg-gray-600 text-white w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Buyer Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" value={user?.displayName} name="buyer_name" placeholder="Buyer Name" className="input bg-gray-600 text-white input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-white">Buyer Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" value={user?.email} name="buyer_email" placeholder="Email" className="input bg-gray-600 input-bordered text-white w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Quantity" className="input text-white input-bordered bg-gray-600 w-full" />
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
                            <input type="text" name="image" placeholder="Image URL" className="text-white input bg-gray-600 input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Description</span>
                        </label>
                        <label className="input-group">
                            <textarea name="description" placeholder="Description" rows="5" className="border-2 p-2 rounded-md bg-gray-600 text-white w-full"></textarea>
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

export default AddAFoods;