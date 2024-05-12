import { useEffect, useState } from "react";
import AllPageTitle from "../Components/AllPageTitle";
import ShowAllPage from "../Components/ShowAllPage";
import useAxios from "../Hooks/useAxios";
import { Helmet } from "react-helmet-async";
import { HashLoader } from "react-spinners";


const AllFoods = () => {
    const [foods, setFoods] = useState([])
    const [loading, setLoading] = useState(false)
    const axiosSecure = useAxios()

    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            const { data } = await axiosSecure('/foods')
            setFoods(data)
            setLoading(false)
        }
        getData()
    }, [axiosSecure])
    return (
        <div className="font-serif bg-black">
            <Helmet>
                <title>GRANNY | ALL FOODS</title>
            </Helmet>
            <AllPageTitle></AllPageTitle>
            <div className="py-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-20 md:px-5">
                {loading ? <div className="flex items-center mx-auto justify-center"><HashLoader color="#36d7b7" /></div> :
                    foods.map((food, i) => <ShowAllPage key={i} food={food}></ShowAllPage>)}
            </div>
        </div>
    );
};

export default AllFoods;