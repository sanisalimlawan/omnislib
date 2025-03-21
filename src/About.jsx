import { faBullseye, faEyeLowVision } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About () {
    return( 
        <section id="About" className="p-7 bg-blue-900">
            <h1 className="text-center text-5xl font-bold text-white">About Us</h1>
            <div className="text-center max-w-[560px] m-auto ">
                <h3 className="text-3xl m-3 ml-0 text-white">Why We Exit</h3>
            <p className="text-white ">We believe that every venture has a purpose and a lifecycle At Satimatic, we focus on innovation, impact and sustainability. When we exit a project, it is because we have either successfully achieved our goals, transitioned to a more advance solution, or found a strategic opporturnity that aligns better with our vission. Whether through acquisition, evolution or market shifts, every exxit is a step toward greater innovation and progress.</p>
            </div>
            <div className="m-auto mt-7 flex flex-col md:flex-row gap-10 justify-center max-w-[900px] ">
                <div className="md:basis-1/2 bg-white p-6 rounded border-b-4 border-black">
                <div className="text-center">
                <FontAwesomeIcon icon={faBullseye} className="text-center  font-bold text-blue-900 w-[60px] h-[60px]"/>
                </div>
                    <h1 className="text-center font-bold text-4xl m-3">Our Mission</h1>
                    <p>We believe technology should make
 life easier, better, and more connected. Our mission is to turn bold ideas into real solutions, whether
 it's bridging communication gaps, making AI more useful, or building secure and accessible digital tools.
 We’re here to create technology that empowers people, helps businesses grow, and makes communities stronger</p>
                </div>
                <div className="md:basis-1/2 bg-white p-6 rounded">
                
                <div className="text-center">
                <FontAwesomeIcon icon={faEyeLowVision} className=" text-center font-bold text-blue-900 w-[60px] h-[60px]"/>
                </div>
                    <h1 className="text-center font-bold text-4xl m-3">Our Vission</h1>
                    <p>We see a future where technology feels natural, helpful, and inclusive, where anyone, anywhere, can access the tools they need to thrive. At Satimatic, we’re not just building systems and software; we’re shaping a world where innovation brings people together, 
                    unlocks opportunities, and makes life better for everyone.</p>
                </div>
            </div>
        </section>
    )
}