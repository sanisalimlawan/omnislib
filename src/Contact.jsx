import { faEnvelope, faHome, faLocationDot, faMessage, faPhone, faPhoneSquare, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact(){
    return(
        <section id="Contact" className="p-7">
            <h1 className="text-center text-4xl font-bold">Contact <span className="text-blue-900">Us</span></h1>
          

 <div className="flex flex-col md:flex-row gap-5 justify-center m-auto max-w-[850px] p-2 ">
    
    <div className="basis-1/2 flex flex-col  md:w-75  justify-center mt-5 gap-5">
        <div className="p-4 md:basis-1/3 md:flex gap-5 w-full text-center md:text-start rounded bg-blue-900">
            <FontAwesomeIcon icon={faLocationDot} className="text-white text-xl-6 w-[60px] h-[60px]" />
           <div>
           <h1 className="m-3 ml-0 text-white text-xl font-bold">OUR SITE LOCATION</h1>
           <p className="m-2 ml-0 text-white">Kaduna, Nigeria</p>
           </div>
        </div>
        <div className="p-4 md:basis-1/3 md:flex gap-5 w-full text-center md:text-start rounded bg-blue-900">
            <FontAwesomeIcon icon={faPhone} className="text-white text-xl-6 w-[60px] h-[60px]" />
           <div>
           <h1 className="m-3 ml-0 text-white text-xl font-bold">OUR CONTACT NUMBER</h1>
           <p className="m-2 ml-0 text-white">07014306854</p>
           </div>
        </div>
        <div className="p-4 md:basis-1/3 md:flex gap-5 w-full text-center md:text-start rounded bg-blue-900">
            <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl-6 w-[60px] h-[60px]" />
           <div>
           <h1 className="m-3 ml-0 text-white text-xl font-bold">OUR CONTACT E-MAIL</h1>
           <p className="m-2 ml-0 text-white">info@satimatic.com</p>
           </div>
        </div>
    </div>
    <div className="basis-1/2 p-5">
    <h2 className="text- mb-5 text-2xl font-bold">Interested in discussing?</h2>
    
        <div className="m-auto p-6  flex-col min-h-[400px] gap-8">
        <form className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
  {/* Name Field */}
  <div className="flex flex-col">
    <label htmlFor="Name" className="font-semibold text-gray-700 mb-1">Name</label>
    <input 
      type="text" 
      name="Name" 
      className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
      placeholder="Enter your name" 
    />
  </div>

  {/* Email Field */}
  <div className="flex flex-col">
    <label htmlFor="Email" className="font-semibold text-gray-700 mb-1">Email</label>
    <input 
      type="email" 
      name="Email" 
      className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
      placeholder="Enter your email" 
    />
  </div>

  {/* Message Field */}
  <div className="flex flex-col">
    <label htmlFor="message" className="font-semibold text-gray-700 mb-1">Message</label>
    <textarea 
      id="message" 
      name="message" 
      rows="4"
      className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
      placeholder="Write your message here..."
    ></textarea>
  </div>

  {/* Submit Button */}
  <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all">
    Submit
  </button>
</form>

        </div>
    </div>
  </div>
        </section>
    )
}