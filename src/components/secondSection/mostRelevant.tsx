import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { FaStar } from "react-icons/fa6";
export function MostRelevant() {
  const data=[
    {
      src:"/images/mostRelevant/Kempiniski.svg",
      name:"Kempinski Hotel Soma Bay",
      description:"From $214 per person",
      rating:"(2,274) 4.6"
    },
    {
      src:"/images/mostRelevant/jwMariot.svg",
      name:"JW Marriott Hotel Cairo",
      description:"From $194 per person",
      rating:"4.6 (2,274)"
    },
    {
      src:"/images/mostRelevant/Kempiniski.svg",
      name:"Kempinski Hotel Soma Bay",
      description:"From $214 per person",
      rating:"(2,274) 4.6"
    },
  ]
  return (
    <div className="w-full mx-auto ">
      <h1 className="text-2xl md:text-5xl font-bold tracking-wider">The Most Relevant</h1>
      <Carousel className="">
        <CarouselContent className="">
          {
            data.map(({name,src,description,rating},idx)=>(
            <CarouselItem key={idx} className="md:basis-[39%]">
              <div className="">
                <Card className="bg-black/0 border-none">
                  <CardContent className="rounded-3xl bg-white p-0 pb-2 md:w-[450px]">
                    <Image
                      src={src} // relative to /public
                      alt="mainImage"
                      width={0}
                      height={0}
                      // sizes="100vw"
                      className="w-full  object-cover rounded-3xl"
                    />
                    <div className="text-black p-2 flex justify-between items-start">
                      <div>
                        <h1>{name}</h1>
                        <span className="text-sm">{description}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaStar className="text-[#D2AC71]"/>
                        <span>{rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=""/>
        <CarouselNext />
      </Carousel>
    </div>
  )
}
