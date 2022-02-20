import Link from 'next/link'

export default function CategoryList({ categories }) {
  return (
    <div className='fixed w-1/4 p-5 bg-white dark:bg-gray-700 rounded-lg shadow-md mt-6'>
      <h3 className='text-2xl bg-blue-500 dark:bg-gray-600 text-white p-3 rounded'>
        Blog Categories
      </h3>
      <ul className='divide-y divide-gray-300'>
        {categories.map((category, index) => (
          <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
            <li className='p-4 cursor-pointer dark:text-gray-300 dark:hover:bg-gray-500 hover:bg-gray-50'>{category}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
