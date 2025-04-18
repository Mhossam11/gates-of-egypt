"use client"
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
} from "@/components/ui/select"
import { Minus, Plus, UsersRound } from "lucide-react"
const FamilyPicker = ()=> {
    const [adults,setAdults]=React.useState(0);
    const [children,setChildren]=React.useState(0);
    const [rooms,setRooms]=React.useState(0);
    const Data=[
        {
            name:"Adults",
            description:"Age 18 or above",
            value:adults,
            setValue:setAdults
        },
        {
            name:"Children",
            description:"Under 18 ",
            value:children,
            setValue:setChildren
        },
        {
            name:"Rooms",
            description:"",
            value:rooms,
            setValue:setRooms
        }

    ]
    const handleAdd=(setValue:React.Dispatch<React.SetStateAction<number>>)=>{
        setValue((prev)=>prev+1);
    }

const handleRemove=(setValue:React.Dispatch<React.SetStateAction<number>>)=>{
        setValue((prev)=>prev-1);
    }
  return (
    <Select>
      <SelectTrigger className=" font-bold tracking-wider w-[180px] bg-transparent hover:bg-transparent shadow-none hover:cursor-pointer border-none ">
          <UsersRound className="rounded-full text-[#D2AC71]" />
      {
    adults === 0 && children === 0 && rooms === 0 ? (
      <span className="hidden md:flex text-white text-sm">Select a room</span>
    ) : (
      <div className="hidden md:flex space-x-3 items-center">
        <span className="text-white text-sm">
          {[
            adults > 0 && `Adults ${adults}`,
            children > 0 && `Children ${children}`,
            rooms > 0 && `Rooms ${rooms}`,
          ]
            .filter(Boolean)
            .join(", ")}
        </span>
      </div>
    )
  }
      </SelectTrigger>
      <SelectContent  className="px-5 bg-white/25 backdrop-blur-sm rounded-[30px] border-none mt-3 ">
        <SelectGroup>
        {
            Data.map(({name,description,value,setValue})=>(
                <div key={name} className="flex items-center space-x-3 my-2 justify-between">
                        <div  className="justify-start flex flex-col cursor-pointer">
                            <span >{name}</span>
                            <span className="text-xs font-light">{description}</span>                                
                        </div>
                        <div className="flex items-center space-x-2 ">
                            <button 
                                className={` ${value == 0? "cursor-not-allowed text-gray-300":"cursor-pointer text-[#D2AC71]"} border rounded-full `}
                                disabled={value == 0}
                                onClick={()=>handleRemove(setValue)}
                                >
                                <Minus size={20}/>
                            </button>
                            <span>{value}</span>
                            <button 
                                className={`${value == 16? "cursor-not-allowed text-gray-300":"cursor-pointer text-[#D2AC71]"}  border rounded-full `}
                                onClick={()=>handleAdd(setValue)}
                                disabled={value == 16}
                                
                            >
                                <Plus size={20} className="border rounded-full"/>
                            </button>
                        </div>
                </div>
            ))
        }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
export default FamilyPicker