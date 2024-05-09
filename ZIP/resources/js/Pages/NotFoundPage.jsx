import { HomeIcon } from '@heroicons/react/24/solid';
const NotFoundPage = () => {
  return (
    <div className='flex  gap-4 h-[90vh] text-xl justify-center  flex-col items-center'>
      <h1 className='text-[8rem] mb-8 font-bold'>404</h1>
      <h2>Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <div>
        

      </div>
        <a href='/' className='flex items-center gap-2 border p-2 rounded'>Go Home <HomeIcon className=' size-6'/></a>
    </div>
  );
};

export default NotFoundPage;
