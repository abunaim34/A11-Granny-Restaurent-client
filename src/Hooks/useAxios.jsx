import axios from 'axios'
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom'

const axiosSecure = axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL: 'https://granny-resturant-server.vercel.app',
    withCredentials: true,
})

const useAxios = () => {
    const { logOutUser } = useAuth()
    const navigate = useNavigate()

    axiosSecure.interceptors.response.use(res => {
        return res
    },
        error => {
            if (error.response.status === 401 || error.response.status === 403) {
                logOutUser()
                    .then(() => navigate('/login'))
            }
            return Promise.reject(error)
        }
    )

    return axiosSecure;
};

export default useAxios;