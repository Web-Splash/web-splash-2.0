import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {FaSearch} from "react-icons/fa";
import SearchResults from "@/components/SearchResults";
import { useState, useEffect } from 'react'
import Toggle from "@/components/themeToggle";


config.autoAddCss = false;
library.add(fas, fab);

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const getResults = async () => {
      if (searchTerm === '') {
        setSearchResults([])
      } else {
        const res = await fetch(`/api/search?q=${searchTerm}`)
        const { results } = await res.json()
        setSearchResults(results)
      }
    }

    getResults()
  }, [searchTerm])

  return (
    <header className='bg-blue-500 dark:bg-gray-700 text-gray-100 shadow fixed w-full z-10 top-0'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='/'>
          <a className='flex md:w-1/5 title-font font-medium
          items-center md:justify-start mb-4 md:mb-0'>
            <Image src='/images/logo.png' width={500} height={107} alt='logo' />
          </a>
        </Link>
        <nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto'>
          <Link href='/blog'>
            <a className='mx-5 cursor-pointer font-sans font-semibold hover:text-indigo-300'>
              Blog
            </a>
          </Link>
          <Link href='/about'>
            <a className='mx-5 cursor-pointer font-sans font-semibold hover:text-indigo-300'>
              About
            </a>
          </Link>
          <Link href='/contact'>
            <a className='mx-5 cursor-pointer font-sans font-semibold hover:text-indigo-300'>
              Contact
            </a>
          </Link>
          <Link href='https://iobriefs.netlify.app/'>
            <a className='mx-5 cursor-pointer font-sans font-semibold hover:text-indigo-300'>
              ⚙ I / O Briefs
            </a>
          </Link>
          <div className='relative dark:bg-gray-700 bg-blue-500 mx-5'>
            <div className='container mx-auto flex items-center justify-center md:justify-end'>
              <div className='relative text-gray-600 w-72'>
                <form>
                  <input
                      type='search'
                      name='search'
                      id='search'
                      className='bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-72'
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder='Search Posts...'
                  />

                  <FaSearch className='absolute top-0 right-0 text-black mt-3 mr-4' />
                </form>
              </div>
            </div>

            <SearchResults results={searchResults} />
          </div>
          <Toggle className='mx-5'/>
        </nav>
      </div>
    </header>
  )
}
