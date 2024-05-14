import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import TopFoods from "../Components/TopFoods";
import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import { Helmet } from "react-helmet-async";
import { HashLoader } from "react-spinners";
import Service from "../Components/Service";
import GuestBook from "../Components/GuestBook";


const Home = () => {
    const [topFoods, setTopFoods] = useState([])
    const [loading, setLoading] = useState(false)
    const axiosSecure = useAxios()

    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            const { data } = await axiosSecure('/foods')
            setTopFoods(data)
            setLoading(false)
        }
        getData()
    }, [axiosSecure])
    return (
        <div className="bg-black font-serif">
            <Helmet>
                <title>GRANNY RESTURANT</title>
            </Helmet>
            <div>
                <Banner></Banner>
            </div>
            <div className="py-12 lg:px-20 md:px-5">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-semibold">Top Foods section</h2>
                    <p className="md:w-[630px] mx-auto">Granny is a resturant, bar and coffee raostery located on Egypt. We have awesome recipes and the most talented chefs in town</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 my-9">
                    {
                        loading ? <HashLoader color="#36d7b7" /> :
                            topFoods?.slice(0, 6).map((food, i) => <TopFoods key={i} food={food}></TopFoods>)
                    }
                </div>
                <div className="text-center">
                    <Link to='/allFoods' className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#c59d5f] rounded hover:bg-[#c59d5f] group">
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#222222] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white italic">SEE ALL FOODS</span>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 py-10 md:grid-cols-2 md:px-5 lg:px-20 text-white lg:grid-cols-3 gap-5">
                <Service></Service>
            </div>
            <div className="md:px-5 lg:px-20">
                <div className="text-center italic">
                    <h3 className="text-xl text-[#c59d5f] ">People talk</h3>
                    <h1 className="text-4xl font-bold">Our Guestbook</h1>
                </div>
                <div className=" py-10 ">
                   <GuestBook />
                </div>
            </div>
        </div>
    );
};

export default Home;