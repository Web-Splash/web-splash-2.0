import Link from 'next/link'
import Image from 'next/image'
import CategoryLabel from './CategoryLabel'

export default function Post({ post, compact }) {
  return (
    <div className='w-full bg-blue-100 dark:bg-gray-600 rounded-lg
    shadow-md mt-6 border-4 border-blue-300 dark:border-gray-500'>
      {!compact && (
              <Image
                  src={post.frontmatter.cover_image}
                  alt=''
                  height={1080}
                  width={1920}
                  className='object-cover rounded-lg w-full h-48'
              />
      )}
      <div className='flex px-10 justify-between items-center'>
        <span className='font-light text-gray-600 dark:text-gray-300'>
          {post.frontmatter.date}
        </span>
        <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
      </div>

      <div className='mt-2 px-10'>
        <Link href={`/blog/${post.slug}`}>
          <a className='text-2xl text-gray-700 dark:text-gray-300 font-bold hover:underline'>
            {post.frontmatter.title}
          </a>
        </Link>
      </div>

      {!compact && (
        <div className='flex justify-between items-center mt-6 px-10 py-8'>
          <Link href={`/blog/${post.slug}`}>
            <a className='text-gray-900 hover:text-blue-600 dark:text-gray-300'>Read More</a>
          </Link>
          <div className='flex items-center'>
            <img
              src={post.frontmatter.author_image}
              alt=''
              className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block'
            />
            <h3 className='text-gray-700 dark:text-gray-300 font-bold'>
              {post.frontmatter.author}
            </h3>
          </div>
        </div>
      )}
    </div>
  )
}
