import '../../css/app.css';
import React, { useEffect, useState } from "react";
import { Link, Head } from '@inertiajs/react';
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import Hero from "../Components/Hero"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from 'react-redux';
import Footer from '../Components/Footer';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import Table from "../Components/Table"
import Drag from "../Components/Drag"
import Data from "../utils/data.json"
import Carousel1 from '@/Components/Carousel2';

function App() {



  const toggleDarkMode = useSelector((state) => state.changeTheme.value)

  const darkTheme = createTheme({
      palette: {
      mode:toggleDarkMode?'dark':"light",
      },
  });

  function HomePage(){
    return(
      <div className=''>
        <Hero/>
        <div className='sticky-filter-bar  text-white flex justify-between underline gap-12 px-6 py-4 w-full border-b-[3px] border-y-white  '>
            <div className=' flex gap-12 under'>
                <Link className="flex items-center gap-1 font-semibold text-xl " href="/">MEN <ArrowRightIcon className=" size-5 "/></Link>
                <Link className="flex items-center gap-1 font-semibold text-xl" href="/">WOMEN <ArrowRightIcon className=" size-5 "/></Link>
                <Link className="flex items-center gap-1 font-semibold text-xl" href="/">KIDS <ArrowRightIcon className=" size-5 "/></Link>
            </div>
            <div className=' flex gap-12'>
                <Link className="flex items-center gap-1 font-semibold text-xl" href="/ViewAll">VIEW ALL <ArrowRightIcon className=" size-5 "/></Link>
            </div>

        </div>
        <div>
        {/* <div className='m-auto mx-[3rem] mt-[3rem] gap-6 grid xl:grid-cols-4 2xl:grid-cols-5 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1' style={{ placeItems: 'center' }}> */}
                  <Carousel1 isHome={true} Data={Data.products}/>
        </div>
      </div>
    )
  }


  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  const[sy,setSy] = useState(window.screenY)
  useEffect(()=>{
    setSy(window.screenY)
  },[window.screenY])


  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div className={`HomePage`}>
      <div className='flex items-center  '>
      <div className='w-full h-screen absolute'>
      </div>
      </div>
        <HomePage/>
    </div>
    <button onClick={()=>ScrollToTop()}
      className={`bg-[#c9a98a]  text-[#543214] p-3 border border-[#543214]  mr-4 mb-4 bottom-4 fixed ${sy > 300 ?`flex`:`hidden`}  right-0 z-50 rounded-full`}>
      <ArrowUpIcon className=' size-5'/>
      {window.scrollY}
    </button>

    </ThemeProvider>
  );
}

export default App;
