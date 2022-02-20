import Layout from '@/components/Layout'
import Image from "next/image";

export default function ContactPage() {
    return (
        <body>
        <Layout title='About Web Splash'>
            <h1 className='text-5xl border-b-4 pb-5 mt-6 dark:text-gray-300 text-blue-500 font-bold'>Contact</h1>
            <div className="text-center w-full"/>
            <div
                className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto dark:bg-gray-700 bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl dark:text-gray-300 lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
                        <div className="text-gray-700 dark:text-gray-300 mt-8">
                            Hate forms? Send us an <span className="underline">email</span> instead.
                        </div>
                    </div>
                    <div className="mt-8 text-center"/>
                </div>
                <div className="">
                    <div>
                        <span className="uppercase dark:text-gray-300 text-sm text-gray-600 font-bold">Full Name</span>
                        <input
                            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder=""/>
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 dark:text-gray-300 font-bold">Email</span>
                        <input
                            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"/>
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm dark:text-gray-300 text-gray-600 font-bold">Message</span>
                        <textarea
                            className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div className="mt-8">
                        <button
                            className="uppercase text-sm font-bold tracking-wide dark:bg-gray-900 bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
        </body>
    )
}
