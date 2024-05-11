import PropTypes from 'prop-types'

const GalleryCart = ({gallery}) => {
    const {image} = gallery || {}
    return (
        <div className="dropdown relative dropdown-hover rounded-md">
            <div tabIndex={0} role="button" ><img src={image} className="rounded-md border-2 h-[258px] w-[385px]" alt="" /></div>
            <ul tabIndex={0} className="dropdown-content z-[1] text-center absolute top-0 menu p-2 shadow bg-black  bg-opacity-70 h-full rounded- w-full">
                <h1 className="font-medium pb-3 pt-20"><span className="font-bold text-blue-600">User Name: </span> Farhan Adnan Farabi</h1>
                <p><span className="font-bold text-blue-600">Feedback: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </ul>
        </div>
    );
};

GalleryCart.propTypes = {
    gallery: PropTypes.object
}

export default GalleryCart;