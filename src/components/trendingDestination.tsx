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
export function TrendingDestination() {
    const data=[
        {
            name:"Cairo",
            description:"Unveil secrets of ancient wonders.",
            bgColor:"bg-gradient-to-r from-orange-500/70 to-orange-500/0",
            src:"/images/trendingDestination/1.svg",
        },
        {
            name:"Hurghada",
            description:"Sunshine, beac es avibrant reefs.",
            bgColor:"bg-gradient-to-r from-blue-500/70 to-blue-500/0",
            src:"/images/trendingDestination/2.svg",
        },
        {
            name:"Sharm EL-Sheikh",
            description:"Dive into clear and  stunning underwater.",
            bgColor:"bg-gradient-to-r from-red-500/70 to-red-500/0",
            src:"/images/trendingDestination/3.svg",
        },
      ]
  return (
    <div className="w-full mx-auto my-10">
      <h1 className="text-2xl md:text-5xl font-bold tracking-wider">Trending Destinations</h1>
      <Carousel className="">
        <CarouselContent className="">
          {data.map(({name,src,bgColor,description})=>(
            <CarouselItem key={name} className="basis-[100%] md:basis-[41%]">
              <div className=" w-fit">
                <Card className="bg-black/0 border-none w-96 ">
                  <CardContent className="relative rounded-3xl  p-0 w-[calc(57vh)] md:w-[calc(65vh)] ">
                    <Image
                      src={src} // relative to /public
                      alt="mainImage"
                      width={0}
                      height={0}
                      // sizes="100vw"
                      className="w-[calc(57vh)] md:w-[calc(65vh)] lg:h-[360px]  object-cover rounded-3xl"
                    />
                    <div className={`absolute z-30 w-[100%] h-full rounded-3xl bottom-0 ${bgColor}`}/>
                    <div className="flex flex-col absolute z-30 text-white top-10 p-2 w-md">
                      <span className="text-4xl md:text-5xl font-semibold">{name}</span>
                      <span className="text-xl md:text-3xl font-semibold">{description}</span>
                    </div>
                    <button className="flex flex-col absolute z-30 text-black bg-white rounded-full bottom-7 left-4  py-2 px-5 md:px-12 text-xl md:text-2xl items-center font-semibold cursor-pointer hover:bg-white/50">See Hotels</button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
