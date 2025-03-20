import { faGlobe, faSatellite, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Services(){
    return(
        <section className="p-7   text-center">
            <h1 className="text-black md:text-6xl text-4xl font-bold">What We Do</h1>
            <p className="text-2xl mt-3">Next-Generation Telecom for Everyone</p>
            <div className="flex flex-col md:flex-row justify-center gap-5 mt-9  ">

  <div className="md:basis-1/3 w-full md:w-72 rounded-lg p-5 shadow-2xl bg-white border-b-4 border-blue-900">
    <FontAwesomeIcon icon={faSatellite} className="font-bold text-blue-900 w-[60px] h-[60px]" />
    <h1 className="font-bold text-2xl md:text-3xl">Satellite-Powered Network</h1>
    <p className="mt-2 text-gray-600">No more blind spots, connect anywhere.</p>
  </div>

  
  <div className="md:basis-1/3 w-full md:w-72 rounded-lg p-5 shadow-2xl bg-white border-b-4 border-blue-900">
    <FontAwesomeIcon icon={faGlobe} className="font-bold text-blue-900 w-[60px] h-[60px]" />
    <h1 className="font-bold text-2xl md:text-3xl">Reliable & Fast Internet</h1>
    
    <p className="mt-2 text-gray-600">High-speed connectivity for businesses & individuals.</p>
  </div>

  <div className="md:basis-1/3 w-full md:w-72 rounded-lg p-5 shadow-2xl bg-white border-b-4 border-blue-900">
  <FontAwesomeIcon icon={faTag} className="font-bold text-blue-900 w-[60px] h-[60px]" />
    <h1 className="font-bold text-2xl md:text-3xl">Affordable Plans</h1>
    <p className="mt-2 text-gray-600">Cost-effective solutions for homes, businesses & governments.</p>
  </div>
</div>
            {/* <button className="mt-8 p-3 bg-blue">Get in Touch</sbutton> */}
        </section>
    )
}