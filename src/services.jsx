export default function Services(){
    return(
        <section className="p-12  h-56 text-center">
            <h1 className="text-black md:text-6xl text-4xl font-bold">What We Do</h1>
            <p className="text-2xl mt-3">Next-Generation Telecom for Everyone</p>
            <div className="flex flex-col md:flex-row justify-center gap-5 mt-9  ">

  <div className="md:basis-1/3 w-full md:w-72 rounded-lg p-5 shadow-2xl bg-white">
  <svg className="h-12 w-12 text-blue-500 text-center" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
</svg>
    <h1 className="font-bold text-2xl md:text-3xl">Satellite-Powered Network</h1>
    <p className="mt-2 text-gray-600">No more blind spots, connect anywhere.</p>
  </div>

  
  <div className="md:basis-1/3 w-full md:w-72 rounded-lg p-5 shadow-2xl bg-white">
  
    <h1 className="font-bold text-2xl md:text-3xl">Reliable & Fast Internet</h1>
    <p className="mt-2 text-gray-600">High-speed connectivity for businesses & individuals.</p>
  </div>

  <div className="md:basis-1/3 w-full md:w-72 rounded-lg p-5 shadow-2xl bg-white">
    <h1 className="font-bold text-2xl md:text-3xl">Affordable Plans</h1>
    <p className="mt-2 text-gray-600">Cost-effective solutions for homes, businesses & governments.</p>
  </div>
</div>
            {/* <div className="flex justify-center gap-5 mt-9  bg-blue">
                <div className="basis-1/3 text-center w-72 rounded p-5 shadow-2xl">
                    <h1 className="font-bold text-3xl">Satellite-Powered Network</h1>
                    <p>No more blind spots, connect anywhere.</p>
                </div>
                <div className="basis-1/3 text-center rounded p-5 shadow-2xl">
                    <h1 className="font-bold text-3xl">Reliable & Fast Internet</h1>
                    <p>High-speed connectivity for businesses & individuals.</p>
                </div>
                <div className="basis-1/3  text-center rounded p-5 shadow-2xl">
                    <h1 className="font-bold text-3xl">Affordable Plans</h1>
                    <p>Cost-effective solutions for homes, businesses & governments.</p>
                </div>
            </div> */}
            <button className="mt-8 p-3 bg-blue">Get in Touch</button>
        </section>
    )
}