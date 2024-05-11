import GalleryCart from "../Components/GalleryCart";

const Gallery = () => {
    return (
        <div className="bg-black pt-16 font-serif">
            <div className="w-full bg-center bg-cover h-[300px] text-white" style={{ backgroundImage: 'url(https://i.ibb.co/X4n4z4B/6.jpg)' }}>
                <div className="flex flex-col text-center space-y-2 items-center justify-center w-full h-full bg-gray-900/40">
                    <h1 className="md:text-5xl pt-3 text-2xl italic md:font-black font-bold text-white lg:text-4xl">GRANNY RESTURANT GALLERY</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 md:px-5 lg:px-20">
                <GalleryCart />
                <img alt="" className=" border-2  rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/TqLs7tS/8.jpg" />
                <img content="kichu ekta" alt="" className=" border-2 rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/TqLs7tS/8.jpg" />
                <img alt="" className=" border-2  rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/TqLs7tS/8.jpg" />
                <img alt="" className="border-2 rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/TqLs7tS/8.jpg" />
                <img alt="" className="border-2 rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/TqLs7tS/8.jpg" />
            </div>
        </div>
    );
};

export default Gallery;