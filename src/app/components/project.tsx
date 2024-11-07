import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div id='project'> 
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
     
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem] ">
      {/* Projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/images/project/student.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Student Management System Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Student Managemnet System
            </h1>
            <p className="leading-relaxed">
              This is my project which i have created Student Management System.
            </p>
            
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/images/project/Atm.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              ATM Machine Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            ATM Machine
            </h1>
            <p className="leading-relaxed">
            This is my project which i have created ATM Machine.
            </p>
           
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/images/project/todo list.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              todo list Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              todo list
            </h1>
            <p className="leading-relaxed">
            This is my project which i have created todo list.
            </p>
           
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
