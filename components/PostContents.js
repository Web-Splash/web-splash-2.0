import Link from 'next/link'

export default function PostContents({contents}) {
    return (
        <div className='fixed w-1/4'>
            <div className='w-full p-5 bg-white rounded-lg shadow-md mt-6 dark:bg-gray-700'>
                <h3 className='text-2xl bg-blue-500 dark:bg-gray-600 text-white p-3 rounded'>
                    On This Page
                </h3>
                <ul className='divide-y divide-gray-300'>
                    <li className='p-4 cursor-pointer dark:text-gray-300 dark:hover:bg-gray-500 hover:bg-gray-50'>
                        <a href="#About"
                           className="block transform transition-colors duration-200
                                   py-2 dark:hover:text-gray-200 hover:text-gray-900">About</a>
                    </li>
                    <li className='p-4 cursor-pointer dark:text-gray-300 dark:hover:bg-gray-500 hover:bg-gray-50'>
                        <a href="#Demo"
                           className="block transform transition-colors duration-200
                                   py-2 dark:hover:text-gray-200 hover:text-gray-900">Demo</a>
                    </li>
                    <li className='p-4 cursor-pointer dark:text-gray-300 dark:hover:bg-gray-500 hover:bg-gray-50'>
                        <a href="#Code"
                           className="block transform transition-colors duration-200
                                   py-2 dark:hover:text-gray-200 hover:text-gray-900">Code</a>
                    </li>
                    <li className='p-4 cursor-pointer dark:text-gray-300 dark:hover:bg-gray-500 hover:bg-gray-50'>
                        <a href="#Video"
                           className="block transform transition-colors duration-200
                                   py-2 dark:hover:text-gray-200 hover:text-gray-900">Video</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
