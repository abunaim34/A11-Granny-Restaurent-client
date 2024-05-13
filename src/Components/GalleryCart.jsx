import PropTypes from 'prop-types'
import useAuth from '../Hooks/useAuth';

const GalleryCart = ({gallery}) => {
    const {image, description} = gallery || {}
    const {user} = useAuth()
    return (
        <div className="dropdown relative dropdown-hover rounded-md">
            <div tabIndex={0} role="button" ><img src={image} className="rounded-md border-2 h-[258px] w-[385px]" alt="" /></div>
            <ul tabIndex={0} className="dropdown-content z-[1] lg:text-center absolute top-0 menu p-2 shadow bg-black  bg-opacity-70 h-full rounded- w-full">
                <h1 className="font-medium text-3xl pb-3 pt-10">{user?.displayName}</h1>
                <p className='md:w-[350px]'><span className="font-bold text-blue-600">Feedback: </span>{description}</p>
            </ul>
        </div>
    );
};

GalleryCart.propTypes = {
    gallery: PropTypes.object
}

export default GalleryCart;