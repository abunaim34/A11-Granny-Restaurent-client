import { NavLink } from 'react-router-dom';
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
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;