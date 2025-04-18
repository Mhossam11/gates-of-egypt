"use client"
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
} from "@/components/ui/select"
import { MapPin } from "lucide-react"
const Location = ()=> {
    const [location,setLocation]=React.useState("");
    const Locations=[
        {
            city:"Cairo",
            place:"City in Egypt",
            value:"Cairo, Egypt"
        },
        {
            city:"Hurghada",
            place:"City in Egypt",
            value:"Hurghada, Egypt"
        },
        {
            city:"Sharm El-Sheikh",
            place:"City in Egypt",
            value:"Sharm El-Sheikh, Egypt"
        },
        {
            city:"Luxor & Aswan",
            place:"City in Egypt",
            value:"Luxor&Aswan, Egypt"
        },
    ]
    const handleLocation=(value:string)=>{
        setLocation(value);
    }
  return (
    <Select>
      <SelectTrigger  className="md:w-[180px] text-white md:font-bold tracking-wider bg-transparent hover:bg-transparent shadow-none hover:cursor-pointer border-none ">
          <MapPin className="rounded-full text-[#D2AC71]"/>
            {location !=""?
                <div className="hidden md:flex md:space-x-3 items-center ">
                    
                    <span className="text-white">{location}</span> 
                </div>
                :
                <span className="hidden md:flex text-white">Select a place</span> }
      </SelectTrigger>
      <SelectContent  className="md:px-5 bg-white/25 backdrop-blur-sm rounded-[30px] border-none mt-3 ">
        <SelectGroup>
        {
            Locations.map(({place,city,value})=>(
                <div key={city} className="flex items-center space-x-3 my-2">
                    <MapPin className="rounded-full bg-[#F6EEE5] text-black p-1" size={25}/>
                        <div onClick={()=>handleLocation(value)} className="justify-start flex flex-col cursor-pointer">
                            <span >{city}</span>
                            <span className="text-xs font-light">{place}</span>                                
                        </div>
                </div>
            ))
        }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
export default Location