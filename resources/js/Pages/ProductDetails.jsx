import { useState,useRef  } from "react"
import { Rating } from "@mui/material";
import { add } from "../redux/addToCartSlice";
import { useSelector, useDispatch } from 'react-redux'
import { motion, useScroll } from "framer-motion";
import Carousel from "@/Components/Carousel";
import { TbMinus } from 'react-icons/tb'
import { TbPlus } from 'react-icons/tb'
import Modal from "../Components/ModalRiv"
import { ArrowLeftSharp } from "@mui/icons-material";
import { ArrowRightSharp } from "@mui/icons-material";
export default function ProductDetails(){
  const count = useSelector((state) => state.addToCart.value)
  const dispatch = useDispatch()

  const[qnt,setQnt] = useState(0)
//   const [productImage, setProductImage] = useState(import.meta.env.VITE_APP_PRODUCT_IMAGE1)
  const productImage = useSelector((state)=>state.productImage.value)

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
      if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft -= 100; // Adjust the scrolling amount as needed
      }
  };

  const scrollRight = () => {
      if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft += 100; // Adjust the scrolling amount as needed
      }
  };
    return(
        <div className="font-[sans-serif]  ">
      <div class="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
        <div class="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
          <div class="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div class=" relative h-[85vh] m-auto  ">
              <img src={productImage} alt="Product"
                className=" z-10 duration-300 ease-in-out absolute top-0 left-0 object-cover hover:object-contain w-full h-full" />
                <div className="  relative overflow-hidden  h-full">
              <img src={productImage} alt="Product"
               className="blur-md z-0 scale-110   object-cover hover:object-contain h-full w-full" />
                </div>
            </div>
            <div className="Parent mt-1 flex items-center relative h-[8rem]   " >
            <Carousel/>
            </div>
          </div>
          <div class="lg:col-span-2">
            <h2 class="text-2xl font-extrabold ">T-shirt | Men</h2>
            <div class="flex flex-wrap gap-4 mt-4">
              <p class="  text-xl font-bold">$120</p>
            </div>
            <div className="flex items-center space-x-1 mb-4">
            <Rating defaultValue={4} readOnly/>
            <span className=" text-sm">(50 reviews)</span>
            </div>
{/*---------COUNTER ---------------------------------------------------------------------- */}
            <div>
              <div className=' flex items-center space-x-3 border border-neutral-400 rounded-md w-fit'>
                <button
                className='border flex items-center justify-center hover:bg-neutral-100 border-r-neutral-400 rounded-md w-8 h-7 '
                  aria-label="Increment value"
                  onClick={() => setQnt(qnt+1)}
                >
                  <TbPlus/>
                </button>
                <span>{qnt}</span>
                <button
                className='border flex items-center justify-center hover:bg-neutral-100 border-l-neutral-400 rounded-md w-8 h-7 '
                  aria-label="Decrement value"
                  onClick={() => setQnt((qnt === 0) ?qnt:qnt-1)}
                >
                  <TbMinus/>
                </button>
              </div>
            </div>
            {/* <Counter/> */}
            {/*MAIN ACTION BUTTONS*/}
            <div class="flex flex-wrap gap-4 mt-2 ">
              <button type="button" class="min-w-[200px] px-4 py-3 bg-[#b38962] text-white hover:bg-[#a77343]  text-sm font-bold rounded">Buy now</button>
              <button onClick={()=>{
                dispatch(add(qnt))
              }} type="button" class="min-w-[200px] px-4 py-2.5 border border-neutral-300 bg-transparent text-yellow-30 text-sm font-bold rounded">Add to cart</button>
              {/* <button type="button" class="min-w-[200px] px-4 py-3 border border-neutral-300  bg-transparent  text-sm font-bold rounded">Submit your riview</button> */}
              <Modal/>
            </div>
            {/* ABOUT PRODUCT */}
            <div class="mt-8">
              <h3 class="text-lg font-bold text-yellow-30">About the Product</h3>
              <ul class="space-y-3 list-disc mt-4 pl-4 text-sm ">
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur!</li>
                <li>Excepturi vel ipsum dolor sit amet.</li>
                <li>Sit amet consectetur adipisicing elit. Facere itaque voluptatum quos.</li>
                <li>Atque debitis culpa dignissimos ullam animi excepturi vel. Eos, dignissimos!</li>
              </ul>
            </div>
            <div class="mt-8">

              <div class="mt-8">
                <h3 class="text-lg font-bold text-yellow-30">Reviews(10)</h3>
                <div class="space-y-3 mt-4">
                  <div class="flex items-center">
                    <p class="text-sm text-whit font-bold">5.0</p>
                    <svg class="w-5 fill-yellow-30 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div class="bg-slate-200 rounded w-full h-2 ml-3">
                      <div class="w-2/3 h-full rounded  bg-amber-400"></div>
                    </div>
                    <p class="text-sm text-whit font-bold ml-3">66%</p>
                  </div>
                  <div class="flex items-center">
                    <p class="text-sm text-whit font-bold">4.0</p>
                    <svg class="w-5 fill-yellow-30 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div class="bg-slate-200 rounded w-full h-2 ml-3">
                      <div class="w-1/3 h-full rounded bg-amber-400"></div>
                    </div>
                    <p class="text-sm text-whit font-bold ml-3">33%</p>
                  </div>
                  <div class="flex items-center">
                    <p class="text-sm text-whit font-bold">3.0</p>
                    <svg class="w-5 fill-yellow-30 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div class="bg-slate-200 rounded w-full h-2 ml-3">
                      <div class="w-1/6 h-full rounded bg-amber-400"></div>
                    </div>
                    <p class="text-sm text-whit font-bold ml-3">16%</p>
                  </div>
                  <div class="flex items-center">
                    <p class="text-sm text-whit font-bold">2.0</p>
                    <svg class="w-5 fill-yellow-30 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div class="bg-slate-200 rounded w-full h-2 ml-3">
                      <div class="w-1/12 h-full rounded bg-amber-400"></div>
                    </div>
                    <p class="text-sm text-whit font-bold ml-3">8%</p>
                  </div>
                  <div class="flex items-center">
                    <p class="text-sm text-whit font-bold">1.0</p>
                    <svg class="w-5 fill-yellow-30 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div class="bg-slate-200 rounded w-full h-2 ml-3">
                      <div class="w-[6%] h-full rounded bg-amber-400"></div>
                    </div>
                    <p class="text-sm text-whit font-bold ml-3">6%</p>
                  </div>
                </div>
              </div>
              <div class="flex items-start mt-8">
                <img src="https://readymadeui.com/team-2.webp" alt="team" className="w-12 h-12 rounded-full border-2 border-white" />
                <div class="ml-3">
                  <h4 class="text-sm font-bold text-whit">John Doe</h4>
                  <div class="flex items-center space-x-1 mt-1">
                    <Rating defaultValue={4} size="small" readOnly/>
                    <p class="text-xs !ml-2 font-semibold text-whit">2 mins ago</p>
                  </div>
                  <p class="text-xs mt-4 text-whit">The service was amazing. I never had to wait that long for my demand. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
                </div>
              </div>
              <button type="button" class="w-full mt-8 px-4 py-2 bg-transparent border-2 border-yellow-30 text-yellow-30 font-bold rounded">Read all reviews</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
