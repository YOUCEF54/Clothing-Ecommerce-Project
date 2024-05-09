import SideBar from '@/Components/SideBar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { EyeIcon } from '@heroicons/react/24/outline';
import { Head } from '@inertiajs/react';
import { ArrowUp } from 'phosphor-react';
import LineChart from "@/Components/LineChart"
import { useSelector } from 'react-redux';
import AddProduct from '@/Components/AddProduct';
export default function Dashboard({ auth }) {
    const switchToProductPageState = useSelector((state) => state.switchToProductPage.value)

    return (
        <div>
        {(switchToProductPageState)?
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head  title="Dashboard" />
            <SideBar/>
            <div className='flex justify-end'>
            <main className=' w-[calc(100vw-18rem)] left-full'>
                <div className='cards grid xl:grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 min-w-[13rem]  gap-6 mt-[2rem]  mx-[3rem]'>
                    <div className='card h-[10rem] bg-white p-6 relative '>
                        <EyeIcon className='size-[3rem] p-3 rounded-full mb-2 bg-neutral-100 text-indigo-700'/>
                        <div>
                            <div className=' font-bold text-xl'>$3.458k</div>
                            <label className='font-light text-sm'>Total view</label>
                        </div>
                        <div className=' text-green-500 right-0 bottom-0 absolute m-6 flex items-center gap-1'>0.43%<ArrowUp/></div>
                    </div>
                    <div className='card h-[10rem] bg-white p-6 relative '>
                        <EyeIcon className='size-[3rem] p-3 rounded-full mb-2 bg-neutral-100 text-indigo-700'/>
                        <div>
                            <div className=' font-bold text-xl'>$3.458k</div>
                            <label className='font-light text-sm'>Total view</label>
                        </div>
                        <div className=' text-green-500 right-0 bottom-0 absolute m-6 flex items-center gap-1'>0.43%<ArrowUp/></div>
                    </div>
                    <div className='card h-[10rem] bg-white p-6 relative '>
                        <EyeIcon className='size-[3rem] p-3 rounded-full mb-2 bg-neutral-100 text-indigo-700'/>
                        <div>
                            <div className=' font-bold text-xl'>$3.458k</div>
                            <label className='font-light text-sm'>Total view</label>
                        </div>
                        <div className=' text-green-500 right-0 bottom-0 absolute m-6 flex items-center gap-1'>0.43%<ArrowUp/></div>
                    </div>
                    <div className='card h-[10rem] bg-white p-6 relative '>
                        <EyeIcon className='size-[3rem] p-3 rounded-full mb-2 bg-neutral-100 text-indigo-700'/>
                        <div>
                            <div className=' font-bold text-xl'>$3.458k</div>
                            <label className='font-light text-sm'>Total view</label>
                        </div>
                        <div className=' text-green-500 right-0 bottom-0 absolute m-6 flex items-center gap-1'>0.43%<ArrowUp/></div>
                    </div>
                </div>
                <div className=' p-12'>
                    <LineChart/>
                </div>
            </main>
            </div>
        </AuthenticatedLayout>
        :
        <div>
            <SideBar/>
            <AddProduct/>
        </div>
        }
        </div>
    );
}
