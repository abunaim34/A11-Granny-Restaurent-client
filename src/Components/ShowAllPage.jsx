import {Link} from "react-router-dom"
import PropTypes from 'prop-types'

const ShowAllPage = ({food}) => {
    const {name, image, quantity, price, category} = food || {}
    return (
        <div className="max-w-md relative rounded-md p-4 shadow-md text-white bg-[#1B1616] ">
            <img src={image} alt="" className="object-cover object-center w-full rounded-md h-60 dark:bg-gray-500" />
            <div className="absolute bg-[#1B1616] p-1 rounded-sm top-4 right-4">
                <h1 className="font-sans font-semibold">Price: {price}Tk</h1>
            </div>
            <div className="flex flex-col justify-between pt-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
                    <div className="flex items-center justify-between">
                        <p className="">Category: {category}</p>
                        <p className="font-sans font-semibold">Quantity: {quantity}</p>
                    </div>
                </div>
                <Link to={`/singleFood/${name}`} className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
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
                    <span className="relative">Details</span>
                </Link>
            </div>
        </div>
    );
};

ShowAllPage.propTypes = {
    food: PropTypes.object
}

export default ShowAllPage;