import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <ul className="menu p-4">

               
                    <li>
                        <NavLink to="/dashboard/users" end>
                            <FaUser></FaUser>
                            Users</NavLink>
                    </li>

                </ul>
        </div>
    );
};

export default Dashboard;