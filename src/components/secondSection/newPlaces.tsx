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
export function NewPlaces() {
    const data=[
        {
            src:"/images/newPlaces/1.svg",
            name:"Red Sea"
        },
        {
            src:"/images/newPlaces/2.svg",
            name:"Soma Bay"
        },
        {
            src:"/images/newPlaces/3.svg",
            name:"Nile"
        },
        {
            src:"/images/newPlaces/4.svg",
            name:"Nabq Bay"
        },
        {
            src:"/images/newPlaces/5.svg",
            name:"Cairo"
        },
        {
            src:"/images/newPlaces/3.svg",
            name:"Nilee"
        },
        {
            src:"/images/newPlaces/4.svg",
            name:"Suma Bay"
        },
        {
            src:"/images/newPlaces/5.svg",
            name:"Alex"
        },
    ]
  return (
    <div className="w-full mx-auto ">
      <h1 className="text-2xl md:text-5xl font-bold ">Discover New Places</h1>
      <Carousel className="">
        <CarouselContent className="">
          {data.map(({name,src})=>(
            <CarouselItem key={name} className="basis-[50%] md:basis-[18%] ">
              <div className=" w-fit">
                <Card className="bg-black/0 border-none">
                  <CardContent className="rounded-3xl  p-0 w-60">
                    <Image
                      src={src} // relative to /public
                      alt="mainImage"
                      width={0}
                      height={0}
                      // sizes="100vw"
                      className="relative w-60 max-w-[200px] max-h-[300px]  object-cover rounded-3xl"
                    />
                    <span className="w-full absolute text-2xl z-30 text-white bottom-10 p-2 ">
                      {name}
                    </span>
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
