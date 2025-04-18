"use client"

import { useState, useRef, useEffect } from "react"
import { Search, Globe, Heart, ShoppingCart, User, X, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

export default function Navbar() {
  const data=["GOE","EgyBook","EgyExplore","EgyTales","EgyTreasure"]


  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isSearchActive, setIsSearchActive] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  // Close search dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchActive(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])
  const handleLogIn=()=>{
    setIsLoggedIn(true)
  }
  const handleLogOut=()=>{
    setIsLoggedIn(false)
  }
  return (
    <header className="relative bg-black h-[50px] md:h-[100px] flex flex-col md:justify-center  mt-0">
      <div className="container  md:mx-auto md:px-10 flex items-center justify-around ">
        {/* Desktop Navigation */}
        <nav className=" md:flex w-full items-center justify-center  space-x-10">
          {/* Logo */}
          <div className="hidden md:flex items-center">
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              width={0}
              height={0}
              className="w-20 h-20"
            />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden absolute  w-full justify-between px-5">
          <div className="text-left text-3xl font-semibold "><span className="text-[#D2AC71]">Egy</span>Book</div>              

            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#D2AC71]  hover:bg-black/20 cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 text-[#D2AC71] " /> : <Menu className="h-10 w-10 text-[#D2AC71] " />}
            </Button>
          </div>
          {/* search */}
          <div className="hidden md:flex relative " ref={searchRef}>
              <Button 
                // variant="ghost" 
                size="icon" 
                onClick={() => setIsSearchActive(!isSearchActive)}
                className="bg-black text-[#D2AC71] cursor-pointer"
              >
                <Search className=" h-5 w-5" />
              </Button>
              {isSearchActive && (
                <div className="absolute right-0 top-full  w-80 bg-[#444444] border  rounded-[12px] mt-4 shadow-lg z-50">
                  <div className="p-2 bg-[#444444]  rounded-t-[12px] ">
                    <div className="relative  ">
                      <Search className="absolute left-3 top-2.5 h-4 w-4 /50 " />
                      <Input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-9 rounded-full text-amber-100 placeholder:/50 "
                      />
                    </div>
                  </div>
                  
                  <div className="p-2 bg-[#444444]  rounded-b-[12px]">
                    <div className="text-xs /70 px-2 py-1">Popular</div>
                    <div className="py-1">
                      <button className="flex items-center w-full px-2 py-1.5 text-sm">
                        <Search className="mr-2 h-4 w-4 /70" />
                        <span>Cairo</span>
                        <span className="ml-2 text-xs /50">in Egypt</span>
                      </button>
                      <button className="flex items-center w-full px-2 py-1.5 text-sm">
                        <Search className="mr-2 h-4 w-4 /70" />
                        <span>Alexandria</span>
                        <span className="ml-2 text-xs /50">in Egypt</span>
                      </button>
                      <button className="flex items-center w-full px-2 py-1.5 text-sm">
                        <Search className="mr-2 h-4 w-4 /70" />
                        <span>Hurghada</span>
                        <span className="ml-2 text-xs /50">in Egypt</span>
                      </button>
                    </div>
                    <div className="text-xs /70 text-right px-2 py-1">
                      See all results for search
                    </div>
                  </div>
                </div>
              )}
          </div>
          
          <div className="hidden md:flex space-x-5">
            {
                data.map((item,idx)=>{
                    const egy=item.startsWith("Egy")?"Egy":""
                    const rest=item.replace("Egy","")
                    return(
                        <span key={idx} className="text-lg text-[#F6EEE5]">
                            <span className="text-[#D2AC71]">{egy}</span>
                            <span >{rest}</span>
                        </span>
                    )
                })
            }
          </div>
          {/* Language */}
          <div className="hidden md:flex items-center">
              <Globe className="h-4 w-4 mr-1" />
              <span>EN</span>
          </div>
        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              {/* Wishlist */}
                <Heart className="h-5 w-5" />
              {/* Cart */}
                <ShoppingCart className="h-5 w-5" />
              
              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    // variant="ghost" 
                    size="icon" 
                    className="bg-[#F6EEE5] text-[#D2AC71] rounded-full"
                  >
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40 z-30 bg-[#F6EEE5] rounded-[12px] mt-4">
                  <DropdownMenuItem className="cursor-pointer text-[#D2AC71]">My profile</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer text-black">Saved deals</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer text-black">Invite friends</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer text-black">Settings</DropdownMenuItem>
                  <DropdownMenuSeparator className="" />
                  <DropdownMenuItem onClick={handleLogOut} className="text-red-500 cursor-pointer font-bold">Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <> 
              {/* Login */}
              <Button 
                // variant="outline" 
                className="bg-[#D2AC71] hover:bg-[#D2AC71]/70 rounded-[12px] text-white  "
                onClick={handleLogIn}
              >
                Login
              </Button>
              
              {/* Sign up */}
              <Button 
                className="bg-[#D2AC71] hover:bg-[#D2AC71]/70 rounded-[12px] text-white"
              >
                Sign up
              </Button>
            </>
          )}
        </div>
        </nav>

      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white z-50 absolute top-[100px] left-0 w-full px-5 pb-10">
          {isLoggedIn ? (
            <div className="p-4 space-y-4 ">
              {/* <div className="text-left text-3xl font-semibold "><span className="text-[#D2AC71]">Egy</span>Book</div>               */}
              <div className="h-[calc(100vh-100px)] pt-4  mt-10 space-y-2">
                <div  className="text-2xl flex space-x-2 items-center">
                  <Heart/>
                  <span >WishList</span> 
                </div>
                <div  className="text-2xl flex space-x-2 items-center">
                  <ShoppingCart/>
                  <span >Cart</span> 
                </div>
                <div  className="text-2xl flex space-x-2 items-center">
                  <Globe/>
                  <span >EN</span> 
                </div>
                <div className="text-2xl flex-col flex">
                  <span className="text-[#D2AC71]">My Profile</span>
                  <span>Saved deals</span>
                  <span>Invite friends</span>
                  <span>Settings</span>
                  <span onClick={handleLogOut} className="text-red-600 cursor-pointer">Log out</span>
                </div>
                <Image
                src="/images/logo.svg" // relative to /public
                alt="mainImage"
                width={0}
                height={0}
                className="absolute bottom-0 left-[38%] w-36"
              />
              </div>
            </div>
          ) : (
            <div className="h-[calc(100vh-64px)] relative justify-start p-4 space-y-5">

              {/* <div className=" text-2xl font-semibold "><span className="text-[#D2AC71]">Egy</span>Book</div> */}
              <div className="flex flex-col space-y-4 mt-10">
                <div className="flex space-x-1 items-center">
                  <Globe className=" h-5 w-5" />
                  <span className="text-xl">EN</span>
                </div>
                  <span onClick={handleLogIn} className="text-2xl cursor-pointer">Login</span>
                  <span onClick={handleLogOut} className="text-2xl cursor-pointer">Sign up</span>
              </div>
              <Image
                src="/images/logo.svg" // relative to /public
                alt="mainImage"
                width={0}
                height={0}
                className="absolute bottom-0 left-[38%] w-36"
              />
            </div>
          )}
        </div>
      )}
    </header>
  )
}
