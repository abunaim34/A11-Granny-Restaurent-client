import axios from 'axios'


const axiosSecure = axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL: 'https://granny-resturant-server.vercel.app'
})

const useAxios = () => {
    return axiosSecure;
};

export default useAxios;