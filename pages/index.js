import Link from 'next/link'
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import {getPosts} from '@/lib/posts'
import Image from 'next/image'

export default function HomePage({posts}) {
    return (
        <Layout>
            <Image src='/images/banner.png' width={2560} height={585} alt='banner'/>
            <h1 className='text-5xl text-blue-500 dark:text-gray-300 border-b-4 p-5 font-bold'>Latest Blogs</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {posts.map((post, index) => (
                    <Post key={index} post={post}/>
                ))}
            </div>

            <Link href='/blog'>
                <a className='block dark:text-gray-300 dark:border-gray-300 dark:hover:text-gray-800 bg-transparent hover:bg-blue-100
              text-grey font-semibold hover:text-black
              py-2 px-4 mx-96 my-2 mx-4 text-center border border-blue-400
              hover:border-transparent rounded'>
                    All Blogs
                </a>
            </Link>
        </Layout>
    )
}

export async function getStaticProps() {
    return {
        props: {
            posts: getPosts().slice(0, 6),
        },
    }
}
