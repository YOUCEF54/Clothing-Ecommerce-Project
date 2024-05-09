import React from "react";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,

} from "@heroicons/react/24/solid";
import { UserIcon } from '@heroicons/react/24/outline';


// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu({toggleDarkMode}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
      <button className=" bg-[#0095FB]f border p-2 font-light  rounded-full ">

            <UserIcon className=" size-5" />
        </button>
      </MenuHandler>

      <MenuList className={`p-2 w-[12rem] gap-2 space-y-2 ${(toggleDarkMode) ? ` bg-zinc-900`:`bg-white`}`}>
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `size-5  ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal text-lg"
                color={isLastItem ? "red" : "inherit"}
              >
                <a href={label}>
                {label}
                </a>
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default function UserDropDown({toggleDarkMode}) {

  return (
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <ProfileMenu toggleDarkMode={toggleDarkMode} />
      </div>
  );
}
