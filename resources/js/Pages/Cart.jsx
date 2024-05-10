import { HeartIcon } from "@heroicons/react/24/outline";
import { Cancel, CancelOutlined, CancelSharp } from "@mui/icons-material";
import { GiCancel } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { VscHeart } from "react-icons/vsc";
import { VscHeartFilled } from "react-icons/vsc";

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { ArrowRight } from "phosphor-react";
import { FcGoogle } from "react-icons/fc";

const quantity = [];
const maxQuantity = 13;

for (let i = 1; i <= maxQuantity; i++) {
    quantity.push({ name: i });
}

function ComboBox() {
  const [selected, setSelected] = useState(quantity[0])
  return (
    <div className=" top-16 w-fit">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative  cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border border-black focus:outline-none  focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-40 w-fit overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {quantity.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

function Card(){
    return(
        <div>
        <div className="flex max-sm:flex-col gap-2 border border-black ">
            <img className=" sm:size-48" src="https://assetmanagerpim-res.cloudinary.com/images/bb07ea62b4054df1ac07afd000e419fd_9366/IM4497_000_plp_model.jpg?sh=364&strip=false&sw=364"/>
            <div className="w-full p-2">
                <div className="flex justify-between mr-2 "><div className=" line-clamp-1">ADICOLOR CLASSICS TREFOIL HOODIE</div><span>$65.00</span></div>
                <div>BETTER SCARLET</div>
                <div>Size: L</div>
                <div className="flex gap-2 items-center">Selected color: <div className="ring-1 size-5 bg-[#EB1832] rounded"></div></div>
                <ComboBox/>
            </div>
            <div className="flex flex-col   items-end m-2 gap-2 max-sm:absolute  max-sm:right-5">
                <CancelSharp className=""/>
                <VscHeartFilled strokeWidth={1} stroke="black" className="mr-[2.5px] size-[1.2rem] cursor-pointer fill-white hover:fill-black" />

            </div>
        </div>
    </div>
    )
}


export default function Cart(){
    return(
        <div className=" m-4">
            <div className="py-4 m-2 ">
                <h1 className="mb-2 font-bold text-xl">YOUR BAG</h1>
                <div>TOTAL: ({14} items) <sapn className="font-semibold">$1028.00</sapn></div>
                <p>Items in your bag are note reserved - check out now to make them yours.</p>
            </div>
            <div className="flex gap-2 max-md:flex-col">
                <div className="grid lg:grid-cols-2 gap-2">
                    {Array.from({ length: 8 }, (_, index) => <Card key={index} />)}
                </div>
                <div className="h-fit border-2 border-dashed border-gray-700 w-full max-w-[20rem] bg-gray-50 p-4">
                    <h1 className="mb-4 uppercase font-bold text-xl">Order Summery</h1>
                    <ul>
                        <li className="flex justify-between"><span>14 items</span><span className=" font-semibold">$920.00</span></li>
                        <li className="flex justify-between"><span>Sales Tax</span><span className=" font-semibold">$108.00</span></li>
                        <li className="flex justify-between"><span>Delivery</span><span className=" font-semibold">Free</span></li>
                        <li className="flex justify-between mt-4"><span>TOTAL</span><span className=" font-semibold">$1028.00</span></li>
                    </ul>
                    <hr color="black" className=" my-4 bg-gray-500 p-[.51px]"/>
                 <div className=" flex flex-col gap-2">
                 <button
                        className="linear w-full flex flex-row justify-between items-center rounded  bg-indigo-600 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-indigo-700 active:bg-indigo-800"
                        data-ripple-light
                        >
                    <div className="linear flex flex-row items-center">

                        <svg
                            className="mr-2 fill-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            height="16"
                            width="16"
                        >
                            <path d="M7.914 10.677h1.659c3.604 0 5.649-1.623 6.3-4.96.021-.11.04-.216.056-.322.036-.226.054-.429.062-.624.006-.134.01-.213.009-.287a2.643 2.643 0 0 0-.216-1.039c-.129-.296-.324-.587-.613-.918C14.318 1.557 12.832 1 11.057 1H5.404a.81.81 0 0 0-.799.683l-1.02 6.571-1.269 8.185a.486.486 0 0 0 .48.561h2.772l.849-5.043a1.51 1.51 0 0 1 1.497-1.28zm9.103-4.587c-.792 3.771-3.357 5.772-7.445 5.772H7.914a.331.331 0 0 0-.328.282L6.481 19h2.907a.707.707 0 0 0 .699-.597l.029-.15.555-3.514.036-.194a.707.707 0 0 1 .699-.597h.44c2.85 0 5.081-1.158 5.733-4.506.268-1.38.132-2.534-.562-3.352z" />
                        </svg>
                        Pay safely with PayPal
                        </div>
                        <ArrowRight/>

                    </button>

                    <button
                    className="linear flex flex-row justify-between items-center rounded w-full bg-gray-700 px-4 py-3 text-base font-medium text-white transition duration-200 hover:bg-gray-800 active:bg-gray-900  dark:text-white  "
                    data-ripple-light
                    >
                   <div className="linear flex flex-row items-center">
                   <svg
                        className="mr-2 fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        height="16"
                        width="16"
                    >
                        <path d="M18.5 5.146V14.854Q18.5 15.688 17.927 16.26Q17.354 16.833 16.521 16.833H3.479Q2.646 16.833 2.073 16.26Q1.5 15.688 1.5 14.854V5.146Q1.5 4.312 2.073 3.74Q2.646 3.167 3.479 3.167H16.521Q17.354 3.167 17.927 3.74Q18.5 4.312 18.5 5.146ZM3.479 6.625H16.521V5.146Q16.521 5.146 16.521 5.146Q16.521 5.146 16.521 5.146H3.479Q3.479 5.146 3.479 5.146Q3.479 5.146 3.479 5.146ZM3.479 10.062V14.854Q3.479 14.854 3.479 14.854Q3.479 14.854 3.479 14.854H16.521Q16.521 14.854 16.521 14.854Q16.521 14.854 16.521 14.854V10.062ZM3.479 14.854Q3.479 14.854 3.479 14.854Q3.479 14.854 3.479 14.854V5.146Q3.479 5.146 3.479 5.146Q3.479 5.146 3.479 5.146Q3.479 5.146 3.479 5.146Q3.479 5.146 3.479 5.146V14.854Q3.479 14.854 3.479 14.854Q3.479 14.854 3.479 14.854Z" />
                    </svg>
                    Debit or Credit Card
                   </div>
                    <ArrowRight/>
                    </button>

                    <button
                    className="linear  flex flex-row justify-between items-center rounded w-full bg-gray-100 px-4 py-3 text-base font-medium   transition duration-200 hover:bg-gray-200 active:bg-gray-300  dark:text-white  "
                    data-ripple-light
                    >
                   <div className="linear flex flex-row items-center text-gray-700">
                   <FcGoogle className="mr-2"/>
                    Pay with Google pay
                   </div>
                    <ArrowRight className="text-black"/>
                    </button>
                 </div>

                </div>
            </div>


        </div>
    )
}
