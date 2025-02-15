import sneaky_text from 'src/assets/Images/SNEAKY_text.png';
import { BsChat } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";



export function ProfileBox() {
    return (
        <div className='flex flex-col justify-center items-center sm:p-8 bg-black w-full'>
            <img src={sneaky_text}
                className='flex phone:w-48 sm:w-72 mt-8'
                alt="" />
            <div className='flex flex-col w-full'>
                <div className='flex items-center text-xl text-white m-8 relative py-4 border-b-2'>
                    <h1 className='phone:text-3xl sm:text-5xl'>Discover</h1>
                    <select className='phone:hidden md:flex absolute right-0 text-xl bg-transparent border-2 text-white outline-none p-2 px-4 rounded-lg'>
                        <option value="" >Sort By</option>
                    </select>
                </div>
                <div className='flex flex-wrap justify-center'>
                    {['1', '2', '3', '4', '5', '6', '7', '8'].map(val => (
                        <div className='flex flex-col border-px overflow-hidden m-4'>
                            <div className='relative'>
                                <img className='rounded-2xl w-80 h-[360px]'
                                    src="https://images.unsplash.com/photo-1598897516650-e4dc73d8e417?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybCUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D" alt="" />
                                <div className='flex absolute right-0 bottom-2 justify-end'>
                                    <span className='bg-white p-2 rounded-full'><BsChat /></span>
                                    <span className='bg-white p-2 rounded-full mx-2'><FaRegHeart color='#C73168' /></span>
                                </div>
                            </div>
                            <div className='flex relative mt-4'>
                                <span className='text-3xl text-main-pink'>Kanty</span>
                                <span className='absolute text-xl right-2 text-gray-200'>Age 32</span>
                            </div>
                            <span className='text-gray-200'>Florida</span>
                        </div>
                    ))}
                </div>
                <button
                    className='bg-white text-black w-max py-2 px-8 text-2xl rounded-full my-12 mx-auto font-medium'>
                    Load More
                </button>
            </div>
        </div>
    )
}