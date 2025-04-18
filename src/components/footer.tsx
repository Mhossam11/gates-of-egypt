import Image from "next/image";

const Footer = ( ) => {
    const logos=[
        "/images/footer/ig.svg",
        "/images/footer/fb.svg",
        "/images/footer/tiktok.svg",
        "/images/footer/twitter.svg",
        "/images/footer/linkedIn.svg",
    ]
    const data=["Home","EgyBook","EgyExplore","EgyTales","EgyTreasure"]
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-[1.06fr_0.94fr]  w-full mt-64 md:mt-36 pb-10 ">
            <div className="space-y-4 md:space-y-7 col-span-1">
                <Image
                    src={"/images/footer/logo.svg"} // relative to /public
                    alt="mainImage"
                    width={0}
                    height={0}
                    // sizes="100vw"
                    className="relative w-32 md:w-60 max-w-[200px] max-h-[300px]  object-cover rounded-3xl"
                />
                <p className="text-xl md:text-3xl text-[#F6EEE5] max-w-lg">Lorem, Ipsum Lorem, Ipsum Lorem, Ipsum or less.</p>
                <button className="bg-[#D2AC71] rounded-full py-2 text-lg font-semibold max-w-sm  text-white px-8">Discover More</button>
                <div className="space-x-5 ">
                    {
                        data.map((item,idx)=>{
                            const egy=item.startsWith("Egy")?"Egy":""
                            const rest=item.replace("Egy","")
                            return(
                                <span key={idx} className="text-md md:text-xl text-[#F6EEE5]">
                                    <span className="text-[#D2AC71]">{egy}</span>
                                    <span >{rest}</span>
                                </span>
                            )
                        })
                    }
                </div>
            </div>
            <div className="mt-6 md:mt-0 flex items-end space-x-5 justify-end  col-span-1">
                {
                    logos.map((item,idx)=>(
                        <Image
                        src={item} // relative to /public
                        alt="mainImage"
                        width={0}
                        height={0}
                        key={idx}
                        className=" w-9 h-9 md:w-14 md:h-14 object-cover rounded-sm"
                    />
                    ))
                }
            </div>
        </div>
     );
}

export  default Footer;