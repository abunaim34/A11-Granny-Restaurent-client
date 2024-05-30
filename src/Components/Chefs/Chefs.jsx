import { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


import axios from 'axios';
const Chefs = () => {
    const [chefs, setChefs] = useState([])

    useEffect(() => {
        axios('/Chefs.json')
            .then(res => {
                setChefs(res.data)
            })
    })

    return (
        <>
            {
                chefs.map(chef => <div key={chef.id} className="max-w-md p-4 text-white">
                    <div key={chef.id} className="card rounded-none">
                        <div className=" dropdown relative dropdown-hover rounded-md">
                            <div tabIndex={0} role="button" ><img className=' rounded-sm' src={chef.image} alt="Shoes" /></div>
                            <ul tabIndex={0} className=" dropdown-content z-[1] lg:text-center absolute top-0 menu p-2 shadow bg-black  bg-opacity-70 h-full rounded- w-full">
                                <div className='absolute space-y-3 bottom-3'>
                                    <div className='flex text-[#C59D5F] text-lg gap-5 justify-center items-center'>
                                        <a href=""><FaFacebookF /></a>
                                        <a href=""><FaTwitter /></a>
                                        <a href=""><FaInstagram /></a>
                                    </div>
                                    <p className='text-gray-400'>{chef.description}</p>
                                </div>
                            </ul>
                        </div>
                        <div className="card-body flex items-center ">
                            <h2 className="text-xl text-center italic">{chef.name}</h2>
                            <p className='text-[#C59D5F] italic'>{chef.title}</p>
                        </div>
                    </div>
                </div>)
            }
        </>
    );
};

export default Chefs;