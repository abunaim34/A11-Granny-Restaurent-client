import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo-light.png'

const Navber = () => {

    const navLinks = <>
        <NavLink to="/" className={({ isActive }) => isActive ? 'border p-2 rounded-sm border-white text-white font-black' : 'font-bold text-white p-2'}>Home</NavLink>
        <NavLink to="/allFoods" className={({ isActive }) => isActive ? 'border p-2 rounded-sm border-white text-white font-black' : 'font-bold text-white p-2'}>All Foods</NavLink>
        <NavLink to="/gallery" className={({ isActive }) => isActive ? 'border p-2 rounded-sm border-white text-white font-black' : 'font-bold text-white p-2'}>Gallery</NavLink>
    </>
    return (
        <div className="navbar bg-black md:px-20 font-serif">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-black">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-black rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div> */}
                <div className='flex gap-3'>
                    <Link to='/register' className="relative hidden  md:inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#c59d5f] rounded hover:bg-[#c59d5f] group">
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#222222] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white font-bold">SignUp</span>
                    </Link>
                    <Link to='/login' className="relative  inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#c59d5f] rounded hover:bg-[#c59d5f] group">
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#222222] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white font-bold">SignIn</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navber;