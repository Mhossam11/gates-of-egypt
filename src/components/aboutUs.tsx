import { PiCursorClick } from "react-icons/pi";
import { TbBadgeVr } from "react-icons/tb";
import { TbPigMoney } from "react-icons/tb";
const AboutUs = ( ) => {
    return ( 
        <div className="">
            <span className="text-2xl md:text-5xl font-bold tracking-wider">
                Why choose <span className="text-[#D2AC71] ">Egy</span>Book? 
            </span>
            <div className="grid grid-cols-3 mt-10 gap-10">
                <div className="space-y-3 col-span-3 md:col-span-1">
                    <PiCursorClick className="text-[#346D52] w-12 h-12 md:w-20 md:h-20" />
                    <span className="text-2xl md:text-3xl font-semibold ">
                        <span className="text-[#D2AC71]">Seamless </span>
                         &
                         <span className="text-[#346D52] "> Smart </span>
                           Booking</span>
                    <p className="mt-3 md:text-2xl  w-[90%]">Quick, user-friendly platform that simplifies the reservation process</p>
                </div>
         
                <div className="space-y-3 col-span-3 md:col-span-1">
                    <TbBadgeVr  className="text-[#346D52] w-12 h-12 md:w-20 md:h-20" />
                    <span className="text-2xl md:text-3xl font-semibold"> 
                        <span className="text-[#346D52]">Immersive </span>VR Previews</span>
                    <p className="mt-3 md:text-2xl  w-[90%]">Quick, user-friendly platform that simplifies the reservation process</p>
                </div>

                <div className="space-y-3 col-span-3 md:col-span-1">
                    <TbPigMoney   className="text-[#346D52] w-12 h-12 md:w-20 md:h-20" />
                    <span className="text-2xl md:text-3xl font-semibold">
                        <span className="text-[#346D52]">Exclusive </span>Best-Price Deals</span>
                    <p className="mt-3 md:text-2xl  w-[90%]">Quick, user-friendly platform that simplifies the reservation process</p>
                </div>


            </div>
        </div>
     );
}

export  default AboutUs;