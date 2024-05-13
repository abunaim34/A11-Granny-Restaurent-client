import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from 'prop-types'
import {HashLoader} from 'react-spinners'

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <HashLoader color="#36d7b7" />

    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={location.pathname} replace={true}></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;