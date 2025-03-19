
export default function Hero(){
    return(
        <section>
             <div className="hero bg-[url('./IMG-20241128-WA0012.jpg')] object-cover bg-no-repeat bg-center bg-cover bg-blue-950 bg-blend-overlay backdrop-opacity-10 Max-w-100% h-[60vh] flex flex-row items-center p-10">
           <div className="content md:basis-2/3">
           <h1 class="font-bold
 text-white md:text-6xl text-3xl ">Bringing Uninterrupted Connectivity to Africa.</h1>
           <p className="z-10 font-normal text-white mt-10">Omnis Lab is tranforming telecommunication  with cutting-edge satelite technology, <br /> ensuring 100% network coverage anywhere, anytime.</p>
           <button className="p-3 bg-blue-700 mt-5 rounded-full text-white w-[120px] ">About Us</button>
           </div>
           {/*  */}
           
        </div>
        {/* <div className="d-none basis-1/3 "></div> */}
        </section>
    )
}