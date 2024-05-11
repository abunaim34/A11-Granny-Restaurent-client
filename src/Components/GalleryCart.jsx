
const GalleryCart = () => {
    return (
        <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" ><img src="https://i.ibb.co/TqLs7tS/8.jpg" alt="" /></div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-black  bg-opacity-70 rounded-box w-full">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div>
    );
};

export default GalleryCart;