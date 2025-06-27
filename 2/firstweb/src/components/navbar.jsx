import React from "react";

export default function Navbar() {
  return (
    <>
      
      <nav className="bg-gray-100 shadow flex flex-col md:flex-row justify-around items-center bg-white  px-2 sm:px-4 py-2.5  md:px- gap-4 md:gap-0 b">

          <div className="flex items-center gap-2">
            <img src="colllegeLogo.jpeg" alt="collegeLogo" className="size-[50px]" />
            <p className="text-2xm font-semibold">Codesschool</p>
          </div>

        <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Teachers</a></li>
            <li><a href="#" className="hover:underline">Holidays</a></li>
        </ul>

        <div>
            <button className="bg-pink-500 hover:bg-pink-900 text-white font-bold py-2 px-4 rounded">Contact Us</button>
        </div>

      </nav>

    </>
  );
}

