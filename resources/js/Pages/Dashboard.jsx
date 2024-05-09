import SideBar from '@/Components/SideBar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { EyeIcon } from '@heroicons/react/24/outline';
import { Head } from '@inertiajs/react';
import { ArrowDown, ArrowUp, ShoppingCart } from 'phosphor-react';
import LineChart from "@/Components/LineChart"
import { useSelector } from 'react-redux';
import AddProduct from '@/Components/AddProduct';
import { Shop2 } from '@mui/icons-material';
import { TbBrandProducthunt } from 'react-icons/tb';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { UsersIcon } from '@heroicons/react/24/outline';

import { useEffect,useState } from 'react';

import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../Components/DropdownFilter';
import Datepicker from '../Components/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import Banner from '../partials/Banner';





export default function Dashboard({ auth }) {
    const switchToProductPageState = useSelector((state) => state.switchToProductPage.value)
    const toggleDarkMode = useSelector((state)=>state.changeTheme.value)

    const sideOpen = useSelector((state)=>state.sideBar.value)

    const [isMediumScreen, setIsMediumScreen] = useState(false);

    useEffect(() => {
      const checkScreenWidth = () => {
        setIsMediumScreen(window.innerWidth <= 768); // Assuming medium screen width is 768px or less
      };

      checkScreenWidth(); // Check on component mount

      const handleResize = () => {
        checkScreenWidth();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <div>


        {(switchToProductPageState)?
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head  title="Dashboard" />
            <div className='flex'>
                    <SideBar/>
                    <main className={`${(sideOpen && !isMediumScreen) ? 'lg:w-[calc(100vw-18.5rem)] w-[calc(100vw-18.5rem)]' : 'w-full'} duration-300 ease-in-out min-h-screen ${toggleDarkMode ? 'bg-neutral-700' : 'bg-neutral-100'} h-full p-4 ml-auto`}>
                    <div className=''>
                        <WelcomeBanner />
                    </div>
                    <div className='cards grid grid-cols-12 min-w-[13rem]  gap-6 mt-[2rem]  '>

                        <DashboardCard01 />
                        <DashboardCard02 />
                        <DashboardCard03 />
                        <DashboardCard04 />
                         <DashboardCard05 />
                        <DashboardCard06 />
                        <DashboardCard07 />
                        <DashboardCard08 />
                        <DashboardCard09 />
                        <DashboardCard11 />
                        <DashboardCard12 />
                        <DashboardCard13 />

                        {/* <div className='card h-[10rem] bg-white p-6 relative '>
                            <EyeIcon className='size-[3rem] p-3 rounded-full mb-2 bg-indigo-50 text-indigo-700'/>
                            <div>
                                <div className=' font-bold text-xl'>3.458k</div>
                                <label className=' font-medium text-gray-600 text-sm'>Total view</label>
                            </div>
                            <div className=' text-green-500 right-0 bottom-0 absolute m-6 flex items-center gap-1'>0.43%<ArrowUp/></div>
                        </div>


                        <div className='card h-[10rem] bg-white p-6 relative '>
                            <ShoppingCart className='size-[3rem] p-3 rounded-full mb-2 bg-indigo-50 text-indigo-700'/>
                            <div>
                                <div className=' font-bold text-xl'>$45.23k</div>
                                <label className=' font-medium text-gray-600 text-sm'>Total profit</label>
                            </div>
                            <div className=' text-green-500 right-0 bottom-0 absolute m-6 flex items-center gap-1'>4.35%<ArrowUp/></div>
                        </div>


                        <div className='card h-[10rem] bg-white p-6 relative  '>
                            <div className='p-2 bg-indigo-50 size-12 rounded-full flex  items-center justify-center '>
                                <HiOutlineShoppingBag className='size-[1.6rem]  text-indigo-700'/>
                            </div>
                            <div>
                                <div className=' font-bold text-xl'>160</div>
                                <label className=' font-medium text-gray-600 text-sm'>Total view</label>
                            </div>
                            <div className=' text-green-500 right-0 bottom-0 absolute m-6 flex items-center gap-1'>2.59%<ArrowUp/></div>
                        </div>


                        <div className='card h-[10rem] bg-white p-6 relative '>
                            <UsersIcon className='size-[3rem] p-3 rounded-full mb-2 bg-indigo-50 text-indigo-700'/>
                            <div>
                                <div className=' font-bold text-xl'>3.456</div>
                                <label className=' font-medium text-gray-600 text-sm'>Total users</label>
                            </div>
                            <div className='text-blue-500 right-0 bottom-0 absolute m-6 flex items-center gap-1'>0.95%<ArrowDown/></div>
                        </div>*/}
                    </div>
                    {/* <div className='mt-6'>
                        <LineChart/>
                    </div> */}
                </main>
            </div>
        </AuthenticatedLayout>
        :
        <div className='flex justify-between bg-neutral-100 '>
            <SideBar/>
            <AddProduct/>
        </div>
        }
        </div>
    );
}
