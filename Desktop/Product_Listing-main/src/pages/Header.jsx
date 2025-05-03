import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { Maincontext } from '../Componenet/Context';
import { FaBars } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {

  const { user, logoout } = useContext(Maincontext);
const [toggle,Settoggle] = useState(false)
  return (
    <header className="bg-cyan-500 text-white p-4 fixed w-full z-1">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Website</h1>
        <ul className="  hidden md:flex space-x-6">
          <> <li><Link to="/" className="hover:text-gray-300">Home</Link></li>



          </>

                {
                 user == null ?
                <>
                <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
                <li><Link to="/register" className="hover:text-gray-300">Register</Link></li>
                </>

                   :
                 <>
                  <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
                  <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
                  <li onClick={logoout} className="hover:text-gray-300 cursor-pointer">Logout</li>
                  <li className='hover:text-gray-300 text-2xl'><Link to="/cart"><FaCartPlus /></Link></li>
              </>

               }


        </ul>
        <ul className={`  z-1 md:hidden space-x-6 fixed bg-gray-800 w-[70%] h-screen text-xl top-[1px] pt-[50px] transition duration-700  flex flex-col ${toggle ? 'left-0' : 'left-[-100%]'}`}>
          <> <li  onClick={() => Settoggle(!toggle)}><Link to="/" className="hover:text-gray-300  ms-[40px] mt-[100px]">Home</Link></li>



          </>

                {
                 user == null ?
                <>
                <li  onClick={() => Settoggle(!toggle)}><Link to="/login" className="hover:text-gray-300   ms-[40px] mt-[0px]">Login</Link></li>
                <li  onClick={() => Settoggle(!toggle)}><Link to="/register" className="hover:text-gray-300   ms-[70px]">Register</Link></li>
                </>

                   :
                 <>
                  <li className='mt-[30px]'  onClick={() => Settoggle(!toggle)}><Link to="/about" className="hover:text-gray-300   ms-[40px] ">About</Link></li>
                  <li className='mt-[30px]'   onClick={() => Settoggle(!toggle)}><Link to="/contact" className="hover:text-gray-300   ms-[40px]  mt-[40px]">Contact</Link></li>
                  <li onClick={logoout} className="hover:text-gray-300 cursor-pointer   ms-[40px]  mt-[20px]">Logout</li>
                  <li  onClick={() => Settoggle(!toggle)} className='hover:text-gray-300 text-2xl   ms-[40px] mt-[20px]'><Link to="/cart"><FaCartPlus /></Link></li>
              </>

               }


        </ul>
        {
          toggle ? 
          <div onClick={() => Settoggle(!toggle)} className='me-4.5 md:hidden block'><MdOutlineClose /></div>
          :

           <div  onClick={() => Settoggle(!toggle)} className='me-4.5 md:hidden block'><FaBars /></div>
        }
       
      </nav>
    </header>
  );
};

export default Header;
