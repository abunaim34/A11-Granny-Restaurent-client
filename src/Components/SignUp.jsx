import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo-light.png'
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

const SignUp = () => {
    const { createUser, updateUser, user, setUser } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photoURL = form.photo.value
        const password = form.password.value;

        e.target.reset()

        if (password === '') {
            return toast.error('Please fulfill your form')
        }
        else if (password.length < 6) {
            return toast.error('Password should be at least 6 characters or longer')
        }
        if (!/[A-Z]/.test(password)) {
            return toast.error('Your password should have at least one Uppercase characters')
        }
        else if (!/[a-z]/.test(password)) {
            return toast.error('Your password should have at least one Lowercase characters')
        }

        createUser(email, password)
            .then((result) => {
                updateUser(name, photoURL)
                setUser({
                    ...user,
                    displayName: name,
                    photoURL: photoURL
                })
                axios.post('https://granny-resturant-server.vercel.app/jwt', { email: result?.user?.email }, { withCredentials: true })
                    .then(() => {
                        toast.success('Sign Up successfully')
                        navigate('/')
                    })
            })
            .then(error => {
                toast.error(error.message)
            })
    }
    return (
        <div className="bg-black py-8 mt-16">
            <Helmet>
                <title>GRANNY | SIGN UP</title>
            </Helmet>
            <div className="w-full  font-serif max-w-md p-6 m-auto mx-auto bg-[#1B1616] rounded-2xl shadow-md dark:bg-gray-800">
                <div className="flex justify-center mx-auto">
                    <img className="w-auto h-10 sm:h-8" src={logo} alt="" />
                </div>
                <h2 className='text-2xl my-3 font-bold text-center'>Please SignUp.</h2>

                <form onSubmit={handleSubmit}>
                    <div className="pb-2">
                        <label className="block text-sm text-white dark:text-gray-200">Name</label>
                        <input type="text" name='name' placeholder='Enter Full Name' className="block w-full px-4 py-2 text-white bg-gray-600 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="pb-2">
                        <label className="block text-sm text-white dark:text-gray-200">Email</label>
                        <input type="email" name='email' placeholder='Enter your Email' className="block w-full px-4 py-2 text-white bg-gray-600 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="pb-2">
                        <label className="block text-sm text-white dark:text-gray-200">Photo URL</label>
                        <input type="text" name='photo' placeholder='Enter your PhotoURL' className="block w-full px-4 py-2 text-white bg-gray-600 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm text-white dark:text-gray-200">Password</label>
                        <input type="password" name='password' placeholder='Enter your Password' className="block w-full px-4 py-2 mt-2 text-white bg-gray-600 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="mt-6">
                        <button className="relative inline-flex items-center justify-center px-6 py-3 w-full overflow-hidden font-bold text-white rounded-md shadow-2xl group">
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
                            <span className="relative">Sign Up</span>
                        </button>
                    </div>
                </form>
                <p className="mt-8 text-xs font-light text-center text-white"> Already have an account? <Link to='/login' className="font-bold text-blue-700 dark:text-gray-200 hover:underline">Sign In</Link></p>
            </div>
        </div>
    );
};

export default SignUp;