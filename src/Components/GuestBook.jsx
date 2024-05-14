import { IoIosStar } from "react-icons/io";
import image1 from '../assets/3 (1).png'
import image2 from '../assets/2.png'
import image3 from '../assets/1.png'

const GuestBook = () => {
    return (
        <div className="grid text-white gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-[#1B1616] italic text-center rounded-sm">
                <div className="py-12 px-8">
                    <div className="flex gap-3 items-center text-xl text-yellow-500 justify-center">
                        <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                    </div>
                    <h1 className="py-7 text-xl md:text-2xl font-medium">“ Granny is simply the best. Great Food, nice atmosphere and very reasonable prices. It just doesn't get any better ”</h1>
                    <div className="flex justify-center py-7 items-center"><img src={image1} className="w-16 rounded-full border-[#c59d5f] border-2 p-1" alt="" /></div>
                    <p>- Adnan Farabi</p>
                </div>
            </div>
            <div className="bg-[#1B1616] italic text-center rounded-sm">
                <div className="py-12 px-8">
                    <div className="flex gap-3 items-center text-xl text-yellow-500 justify-center">
                        <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                    </div>
                    <h1 className="py-7  text-xl md:text-2xl font-medium">“ The reasonable prices, the great atmosphere are only topped by the delicious food. Keep up the great work ”</h1>
                    <div className="flex justify-center py-7 items-center"><img src={image2} className="w-16 rounded-full border-[#c59d5f] border-2 p-1" alt="" /></div>
                    <p>- Abu Naim</p>
                </div>
            </div>
            <div className="bg-[#1B1616] italic text-center rounded-sm">
                <div className="py-12 px-8">
                    <div className="flex gap-3 items-center text-xl text-yellow-500 justify-center">
                        <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                    </div>
                    <h1 className="py-7 text-xl md:text-2xl font-medium">“ We've been to Granny many times over the years. We know what to expect: great food and awesome prices ”</h1>
                    <div className="flex justify-center pb-7 items-center"><img src={image3} className="w-16 rounded-full border-[#c59d5f] border-2 p-1" alt="" /></div>
                    <p>- Farhan Adnan</p>
                </div>
            </div>
        </div>
    );
};

export default GuestBook;