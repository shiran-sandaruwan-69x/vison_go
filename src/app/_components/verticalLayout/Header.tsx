"use client"

import React, { useState } from "react";
import {BsList} from "react-icons/bs";



const Header = (props:any) => {

       return(
           <header className="fixed header-color w-full z-0 px-4 shadow-sm shadow-slate-500/40 pl-[20rem]">
              <div className="flex items-center justify-between h-16">
                  <button className="text-black hover:bg-white ml-3 rounded-sm h-[30px] w-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center">
                      <BsList/>
                  </button>

              </div>
           </header>
       )
};


export default Header;
