import { useEffect, useState } from 'react';
import axios from 'axios';


const Service = () => {
    const [Services, setServices] = useState([])

    useEffect(() => {
        axios('/Service.json')
            .then(data => setServices(data.data))
    }, [])
    return (
        <>
            {
                Services.map(service => <div key={service.id} className="text-center rounded-md">
                    <div className="flex items-center py-7 justify-center"><img src={service.image} alt="" /></div>
                    <h2 className="text-2xl font-semibold italic">{service.title}</h2>
                    <p className="italic p-4">{service.description}</p>
                </div>)
            }
        </>
    );
};

export default Service;