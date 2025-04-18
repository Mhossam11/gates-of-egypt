import AboutUs from "@/components/aboutUs";
import Booking from "@/components/booking";
import FirstSection from "@/components/firstSection/firstSection";
import Footer from "@/components/footer";
import { MostRelevant } from "@/components/secondSection/mostRelevant";
import { NewPlaces } from "@/components/secondSection/newPlaces";
import { TrendingDestination } from "@/components/trendingDestination";
import NavBar from "@/components/ui/navBar";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <NavBar/>
      <FirstSection/>
      <div className=" px-10 md:px-40 mt-5 space-y-5 ">
        <MostRelevant/>
        <NewPlaces/>
        <AboutUs/>
        <TrendingDestination/>
        <Booking/>
        <Footer/>
      </div>
      <div className="absolute bottom-0 bg-gradient-to-t from-[#D28E7133]/40 via-[#D28E7133]/50 to-[#D28E7133]/5 h-96 w-full "></div>
      </div>
  );
}
