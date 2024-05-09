import { BsGenderMale } from "react-icons/bs";
import { BsGenderFemale } from "react-icons/bs";
import { TbMoodKidFilled } from "react-icons/tb";
import { GiBeveledStar } from "react-icons/gi";
import { GoSun } from "react-icons/go";
import AdvancedFilter from "./sidebar_filters"
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
// import { AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid";


export default function Filter(){
    return(
        <div className=" mb-10  md:w-[79.5vw]  m-auto  mt-10  border-[#AE8D70] rounded-full">
            <h2 className="text-3xl border-zinc-500 pl-2 pb-3 border-b-2  ">Shop by</h2>
            <div className=" scroll  flex overflow-auto space-x-4 text-xl font-medium relative rounded-   border-[#AE8D70]  ">
                <button className="p- m-4 h-12 pl-4 flex space-x-4 items-center border rounded-full  border-[#AE8D70]">
                    <div>Men</div>
                    <button className=" bg-sky-500   p-3 font-light  rounded-full">
                    <BsGenderMale className=" size-6 " color="white" />
                    </button>
                </button>
                <button className="p- m-4 h-12 pl-4 flex space-x-4 items-center border rounded-full  border-[#AE8D70]">
                    <div>Women</div>
                    <button className=" bg-rose-500   p-3 font-buttonght text- rounded-full">
                    <BsGenderFemale className=" size-6 " color="white" />
                    </button>
                </button>
                <button className=" m-4 h-12 pl-4 flex space-x-4 items-center border rounded-full  border-[#AE8D70]">
                    <div>Kids</div>
                    <button className=" bg-teal-500   p-2 font-buttonght text- rounded-full">
                    <TbMoodKidFilled className=" size-8 " color="white" />
                    </button>
                </button>
                <button className="p- m-4 h-12 pl-4 flex space-x-4 items-center border rounded-full  border-[#AE8D70]">
                    <div>Winter</div>
                    <button className=" bg-[#1CACCB]   p-2 font-buttonght text- rounded-full">
                    <GiBeveledStar className=" size-8 " color="white" />
                    </button>
                </button>
                <button className="p- m-4 h-12 pl-4 flex space-x-4 items-center border rounded-full  border-[#AE8D70]">
                    <div>Summer</div>
                    <button className=" bg-yellow-500   p-2 font-buttonght text- rounded-full">
                    <GoSun className=" size-8 " color="white" />
                    </button>
                </button>
                
                <div>
                    <AdvancedFilter />
                </div>
                
                
                
            </div>
        </div>
    )
}