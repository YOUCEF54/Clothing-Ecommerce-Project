import { useEffect, useRef } from "react"
import { useAnimation, useInView,motion } from "framer-motion"
import { Heart, Money } from "phosphor-react";
import { Link } from "@inertiajs/react";
import { GoHeartFill } from "react-icons/go";


export default function Card(){
    const ref= useRef(null);
    const isInView = useInView(ref, {once: true})
    const mainConrols = useAnimation()
    useEffect(()=>{
      if(isInView){
        mainConrols.start("visible")
      }
    },[isInView])
    return(

        <div ref={ref} class="flex sm:flex-col max-w-md overflow-hidden  rounded-lg  shadow-lg border border-black ">
    <motion.div
        variants={
            {
                hidden: {opacity:0, y:75},
                visible:{opacity:1,y:0}
            }
        }
        initial= "hidden"
        animate= {mainConrols}
        transition={{duration:0.5, delay:0.25}}
        className=" relative ">
        <div className=" opacity-0 hover:opacity-100 transition-all duration-200 absolute w-full backdrop-filter backdrop-blur-lg  h-full flex items-center justify-center">
            <Link href={route('ProductDetails')} className="bg-yellow-500 p-2 rounded-full border text-black border-black  font-bold">Buy now!</Link>
        </div>

        <div>
            <button className=" absolute right-0 m-[.71rem] rounded-full">
                <GoHeartFill className=" fill-transparent  stroke-2 hover:fill-black stroke-black"/>
            </button>
        </div>

        <img
            src={import.meta.env.VITE_APP_PRODUCT_IMAGE3}
            alt="product"
            className=" object-cover  w-full h-[15rem] transition rounded-t-lgg "
            />

        <div class="px-2 py-1 flex justify-between text-white bg-black">
            <h1>T-shirt For Men</h1>
            <span>220$</span>
        </div>
    </motion.div>
</div>

    )
}
