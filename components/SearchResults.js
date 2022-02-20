import Post from './Post'

export default function SearchResults({ results }) {
  if (results.length === 0) return <></>

  return (
    <div className='absolute w-max dark:bg-gray-700 top-20 right-0 border-4
    border-gray-500 bg-white text-black rounded-2xl'>
      <div className='p-10'>
        <h2 className='dark:text-gray-300 text-3xl mb-3'>{results.length} Results</h2>
        {results.map((result, index) => (
          <Post key={index} post={result} compact={true} />
        ))}
      </div>
    </div>
  )
}
