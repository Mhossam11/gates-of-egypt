import Image from "next/image";

const Booking = ( ) => {
    return ( 
        <div className="space-y-5 md:space-y-0 grid grid-cols-1 md:grid-cols-[1.06fr_0.94fr]  w-full max-h-[466px]">
            <div className="col-span-1 rounded-3xl md:rounded-r-none md:rounded-l-3xl bg-[#BFDBC9] p-10 md:px-10 flex flex-col  justify-center space-y-6 text-black">
                <h1 className="text-3xl md:text-6xl">Ready to Book Your Next Adventure?</h1>
                <h1 className="text-md md:text-2xl max-w-md tracking-wider">Get exclusive deals and immersive previews with our smart booking platform.</h1>
                <button className="bg-[#458465] rounded-full py-2 text-xl font-semibold max-w-sm px-0 text-white cursor-pointer">Book now</button>
            </div>
            <div className="col-span-1">
                <Image
                      src="/images/booking.svg" // relative to /public
                      alt="booking"
                      width={0}
                      height={0}
                      // sizes="100vw"
                      className="w-full h-full  max-h-[466px] object-cover rounded-3xl md:rounded-l-none rounded-r-3xl"
                    />
            </div>
        </div>
     );
}

export  default Booking;