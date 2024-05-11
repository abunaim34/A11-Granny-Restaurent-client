import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from 'prop-types'
import {HashLoader} from 'react-spinners'

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    if (loading) {
        return <HashLoader color="#36d7b7" />

    }
    if (user) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;