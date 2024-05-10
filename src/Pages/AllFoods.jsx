import { useEffect, useState } from "react";
import AllPageTitle from "../Components/AllPageTitle";
import axios from 'axios'
import ShowAllPage from "../Components/ShowAllPage";


const AllFoods = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        axios('/topfoods.json')
            .then(data => {
                setFoods(data.data)
            })
    }, [])
    return (
        <div className="font-serif bg-black">
            <AllPageTitle></AllPageTitle>
            <div className="py-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-20 md:px-5">
                {foods.map((food, i) => <ShowAllPage key={i} food={food}></ShowAllPage>)}
            </div>
        </div>
    );
};

export default AllFoods;