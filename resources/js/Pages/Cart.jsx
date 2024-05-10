import { HeartIcon } from "@heroicons/react/24/outline";
import { Cancel, CancelOutlined, CancelSharp } from "@mui/icons-material";
import { GiCancel } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { VscHeart } from "react-icons/vsc";
import { VscHeartFilled } from "react-icons/vsc";

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const quantity = [];
const maxQuantity = 13;

for (let i = 1; i <= maxQuantity; i++) {
    quantity.push({ name: i });
}

function ComboBox() {
  const [selected, setSelected] = useState(quantity[0])

  return (
    <div className=" top-16 w-72">
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
            <Listbox.Options className="absolute mt-1 max-h-60 w-fit overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
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


export default function Cart(){
    return(
        <div className=" m-4">
            <div className="py-4 m-2 ">
                <h1 className="mb-2 font-bold text-xl">YOUR BAG</h1>
                <div>TOTAL: ({2} items) <sapn className="font-semibold">$156.80</sapn></div>
                <p>Items in your bag are note reserved - check out now to make them yours.</p>
            </div>
            <div>
                <div className="flex max-sm:flex-col gap-2 border border-black">
                    <img className=" sm:size-48" src="https://assetmanagerpim-res.cloudinary.com/images/bb07ea62b4054df1ac07afd000e419fd_9366/IM4497_000_plp_model.jpg?sh=364&strip=false&sw=364"/>
                    <div className="w-full p-2">
                        <div className="flex justify-between mr-2  line-clamp-1"><div>ADICOLOR CLASSICS TREFOIL HOODIE</div><span>$65.00</span></div>
                        <div>BETTER SCARLET</div>
                        <div>Size: L</div>
                        <div className="flex gap-2 items-center">Selected color: <div className="ring-1 size-5 bg-[#EB1832] rounded"></div></div>
                        <ComboBox/>
                    </div>
                    <div className="flex flex-col items-center m-2 gap-2 max-sm:absolute  max-sm:right-5">
                        <CancelSharp className=""/>
                        <VscHeartFilled strokeWidth={1} stroke="black" className=" size-[1.2rem] cursor-pointer fill-white hover:fill-black" />

                    </div>
                </div>
            </div>

        </div>
    )
}
