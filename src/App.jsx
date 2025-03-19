import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav class="bg-blue-900 shadow-md text-white z-10 backdrop-blur-sm shadow-lg p-2 sticky top-0 right-0 left-0 opacity-95">
        <div class="max-w-10xl  mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-around h-16">
                
                <div class="flex-shrink-0 flex items-center">
                    <a href="#" class="text-2xl font-bold">
                      <img src=".\OML.ico" className='w-[50px]' alt="" />
                    </a>
                </div>
                
                <div class="hidden md:flex space-x-6 gap-2 items-center">
                    <a href="#" class="hover:text-gray-300 text-2xl">Home</a>
                    <a href="#" class="hover:text-gray-300 text-2xl">About</a>
                    <a href="#" class="hover:text-gray-300 text-2xl">Services</a>
                    
                </div>

                <div class="flex gap-2 items-center ">
                    <a href="#" class="hidden md:block text-2xl font-bold">Contact</a>
                </div>
           
                
                <div class="md:hidden flex items-center">
                    <button id="menu-btn" class="text-white focus:outline-none">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        
        <div id="mobile-menu" class="hidden max-w-60 flex flex-col items-center gap-4 bg-blue-500 p-4 space-y-2">
            <a href="#" class="block text-white hover:text-gray-300 p-1">Home</a>
            <a href="#" class="block text-white hover:text-gray-300 p-1">About</a>
            <a href="#" class="block text-white hover:text-gray-300 p-1">Services</a>
            <a href="#" class="block text-white hover:text-gray-300 p-1">Contact</a>
        </div>
    </nav>
    </>
  )
}

export default App
