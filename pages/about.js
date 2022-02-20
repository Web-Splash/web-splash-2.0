import Layout from '@/components/Layout'
import Image from "next/image";

export default function AboutPage() {
  return (
      <body className='bg-gray-400'>
        <Layout title='About Web Splash'>
            <h1 className='text-5xl border-b-4 pb-5 mt-6 text-blue-500 dark:text-gray-300 font-bold'>About</h1>
            <div className="mx-auto container mt-10 px-4 lg:px-0">
                <div className="lg:flex justify-center">
                    <div className="lg:w-2/5">
                        {/*<div className="w-full">
                            <Image src="/images/about1.png" width={350} height={350} alt="logo"/>
                        </div>*/}
                        <div className="max-w-md mx-auto bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                            <div className="md:flex">
                                <div className="md:flex-shrink-0">
                                    <Image src="/images/about1.png" width={200} height={200} className="h-48 w-full object-cover md:w-48"
                                         alt="logo"/>
                                </div>
                                <div className="p-8">
                                    <div className="uppercase tracking-wide text-sm dark:text-gray-400 text-indigo-500 font-semibold">
                                        About Web Splash
                                    </div>
                                    <a href="https://www.youtube.com/channel/UCphDOBWR48-8Vg0VccrGJnw"
                                       className="block mt-1 text-lg leading-tight font-medium dark:text-gray-300 text-black hover:underline">Learn Web Design and Development</a>
                                    <p className="mt-2 sm:text-sm dark:text-gray-200">Web splash features the best online web design and development tutorial for all of the latest web technologies from the building blocks of HTML, CSS & JavaScript to frontend to backend technologies.
                                        The viewers of this channel will gain confidence in web design and development.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-3/5 lg:pl-8">
                        <div className="w-full">
                            <Image src="/images/websplash.gif" width={1440} height={810} className="w-full bg-cover bg-center rounded-lg" alt />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
      </body>
  )
}

