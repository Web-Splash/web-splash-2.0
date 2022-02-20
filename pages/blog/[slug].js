import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import Layout from '@/components/Layout'
import CategoryLabel from '@/components/CategoryLabel'
import PostContents from '@/components/PostContents';

export default function PostPage({
                                   frontmatter: { title, category, date, cover_image, author, author_image, contents },
                                   content, slug,
}) {
  return (
    <Layout title={title}>
      <div className='flex justify-between flex-col md:flex-row'>
        <div className='w-3/4 mr-10'>
          <h1 className='dark:text-gray-300 text-5xl mb-7'>{title}</h1>
          <div className='flex justify-between items-center'>
            <Link href='/blog'>
              <nav aria-label="breadcrumb">
                <ol className="flex leading-none text-indigo-600 divide-x divide-indigo-400">
                  <li className="pr-4 text-gray-900 dark:text-gray-300"><a href="/">Home</a></li>
                  <li className="pl-4 pr-4 text-gray-900 dark:text-gray-300"><a href="/blog"> Blog</a></li>
                  <li className="px-4" aria-current="page"><a href="">{title}</a></li>
                </ol>
              </nav>
            </Link>
            <CategoryLabel>{category}</CategoryLabel>
          </div>
          <img src={cover_image} alt='' width={1920} height={480} className='rounded' />
          <div className='flex justify-between items-center dark:bg-gray-700 bg-gray-100 p-2 my-8'>
            <div className='flex items-center'>
              <img
                  src={author_image}
                  alt=''
                  className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block'
              />
              <h4 className='dark:text-gray-300'>{author}</h4>
            </div>
            <div className='dark:text-gray-300 mr-4'>{date}</div>
          </div>
          <div className='dark:text-gray-300 blog-text mt-2'>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
        <div className='w-1/4'>
          <PostContents categories={contents} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  }
}
