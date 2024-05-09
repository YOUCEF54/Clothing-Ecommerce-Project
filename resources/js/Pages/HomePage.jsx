import '../../css/app.css';
import React, { useEffect, useState } from "react";
import { Link, Head } from '@inertiajs/react';
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import Hero from "../Components/Hero"
import Card from "../Components/Card"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from 'react-redux';
import Footer from '../Components/Footer';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import Table from "../Components/Table"
import Drag from "../Components/Drag"

function App() {

  var list = []
  for (let i = 0; i < 10; i++) {
    list.push(<Card key={i}/>)
  }

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
                <Link className="flex items-center gap-1 font-semibold text-xl" href="/">VIEW ALL <ArrowRightIcon className=" size-5 "/></Link>
            </div>

        </div>

              <div className='m-auto mt-[3rem] items-center max-md:flex max-md:flex-col  grid xl:grid-cols-3 2xl:grid-cols-4 max-xl:grid-cols-2  justify-between  gap-6 mx-[10vw]'>
                {list.map((e,index)=>(
                    <Card index={index} key={index}/>
                  ))}
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
      <Footer/>
    <button onClick={()=>ScrollToTop()}
      className={`bg-[#c9a98a]  text-[#543214] p-3 border border-[#543214]  mr-4 mb-4 bottom-4 fixed ${sy > 300 ?`flex`:`hidden`}  right-0 z-50 rounded-full`}>
      <ArrowUpIcon className=' size-5'/>
      {window.scrollY}
    </button>

    </ThemeProvider>
  );
}

export default App;
