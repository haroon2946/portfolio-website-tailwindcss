import Link from 'next/link';
import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai';

    const Footer = () => {
  return (
    <div className='bg-blue-100'>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
      <span className="ml-3 text-xl">Frontend Developers</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2020 Frontend Developers 
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center 
    sm:justify-start">
      <Link 
      target="_blank"
      href={'https://www.linkedin.com/in/haroon-khan-afridi-2aa798168/'} 
      className="text-gray-500">
      
      
        <svg
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          />
          <circle cx={4} cy={4} r={2} stroke="none" />
        </svg>
      </Link>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
