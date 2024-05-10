import React, { useEffect } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { VscAdd } from "react-icons/vsc";
import { useSelector,useDispatch } from "react-redux";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { switchToProductPage } from "@/redux/switchToProductPageSlice";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import { BsSliders } from "react-icons/bs";
import { setOpenSide } from "@/redux/sideBarSlice";
export default function SideBar() {
  const [open, setOpen] = React.useState(0);
//   const switchToProductPageState = useSelector((state) => state.switchToProductPage.value)
  const dispatch = useDispatch()
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

//   const[sideOpen,setSideOpen] = useState(true)
  useEffect(()=>{
    if(window.screen.width < 500){
        console.log("<500"+window.screen.width)
    }else{
        console.log(">500"+window.screen.width)
    }
  },[window.screen])
  const sideOpen = useSelector((state)=>state.sideBar.value)
  return (
         <Card className={` ${(sideOpen)?`  translate-x-0 `:`-translate-x-full`} fixed max-w-[18rem] rounded-none z-40 bg-[#1C2434] text-white  ease-in-out duration-500 h-[calc(100vh-2rem)] w-full   p-4 shadow-xl shadow-blue-gray-900/5`}>

      <div className=" flex  py-2 rounded-md  ">
        <button onClick={()=>{dispatch(setOpenSide(!sideOpen))}} className={`${sideOpen?` opacity-100`:` opacity-0 hidden`} duration-500 z-50  flex left-0 mx-2 p-2 text-white bg-[#4338CA]  rounded cursor-pointer`}>
            <FaBarsStaggered/>
       </button >
        <div className=" text-xl  font-semibold" color="blue-gray">
          Dashboard
        </div>
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Analytics
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Reporting
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Projects
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                E-Commerce
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Orders
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Products
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem onClick={()=>{dispatch(switchToProductPage())}}>
          <ListItemPrefix>
            <VscAdd className=" size-5 " />
          </ListItemPrefix>
          Create product
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
