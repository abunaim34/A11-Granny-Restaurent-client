import { Link } from "react-router-dom";

const TopFoods = () => {
    const id = []
    return (
        <div className="max-w-md rounded-md p-4 shadow-md text-black bg-gray-300 dark:text-gray-800">
            <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-md h-60 dark:bg-gray-500" />
            <div className="flex flex-col justify-between pt-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                    <div className="flex items-center justify-between">
                        <p className="dark:text-gray-800">Curabitur luctus erat nunc,</p>
                        <p className="font-sans font-semibold">25.0TK</p>
                    </div>
                </div>
                <Link to={`topFoods/${id}`} type="button" className="flex btn items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Details button</Link>
            </div>
        </div>
    );
};

export default TopFoods;