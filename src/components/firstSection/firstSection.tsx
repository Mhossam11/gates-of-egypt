import Image from "next/image";
import { Button } from "../ui/button";
import { DatePicker } from "./datePicker";
import FamilyPicker from "./familyPicker";
import Location from "./location";
import { IoNavigate } from "react-icons/io5";
const FirstSection = ( ) => {
    return ( 
        <div className="w-full relative ">
            <div className="block bg-black z-10 opacity-50 absolute inset-0"/> 
            <Image
              src="/images/mainImage.svg" // relative to /public
              alt="mainImage"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full  object-cover "
            />
            <div className="absolute max-w-[1200px] md:space-y-5 inset-10 md:inset-50 mx-auto   items-baseline flex flex-col justify-end z-20">
                <div className="md:space-y-3">
                    <div className="flex items-center space-x-2 text-sm mdtext-xl tracking-wider">
                    <IoNavigate />
                        <h2>Egypt</h2>
                    </div>
                    <h1 className="text-sm md:text-4xl font-semibold text-white">Hey, Bishoy!</h1>
                    <h1 className="text-sm md:text-4xl font-semibold text-white">Tell us where you want to stay</h1>
                    <h2 className="text-sm md:text-2xl  text-white">Book 450+ Curated Egyptian Hotels</h2>
                </div>
                {/* bar */}
                <div className="mx-auto w-sm md:w-full max-w-6xl grid grid-cols-4  bg-white/25 backdrop-blur-sm rounded-full p-2 justify-around">
                    <div className="border-r-2 col-span-1">
                        <Location/>
                    </div>
                    <div className="border-r-2  col-span-1">
                        <DatePicker/>
                    </div>
                    <div className="border-r-2  col-span-1">
                        <FamilyPicker/>
                    </div>
                    <div className="relative flex  col-span-1">
                        <Button className="text-xs px-2  md:text-xl bg-[#346D52] hover:bg-[#346D52]/50 cursor-pointer rounded-full right-0 absolute text-white md:py-4 md:px-10">Explore Stays</Button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export  default FirstSection;