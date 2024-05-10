import useAuth from "../Hooks/useAuth";

const FoodPurchase = () => {
    const { user } = useAuth()
    return (
        <div className=" lg:px-24 py-20 bg-black text-white">
            <div className="text-center  mx-auto mb-8 md:px-4">
                <h2 className="text-5xl font-bold">Purchase your favorite Foods</h2>
            </div>
            <form className="p-4">
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="item_name" placeholder="Name" className="input input-bordered bg-gray-600 w-full" />
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
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Quantity" className="input input-bordered bg-gray-600 w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-white">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image URL" className="input bg-gray-600 input-bordered w-full" />
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
                    <span className="relative">Purchase</span>
                </button>
            </form>
        </div>
    );
};

export default FoodPurchase;