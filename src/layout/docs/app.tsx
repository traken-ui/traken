import Avatar from '@/components/avatar/avatar';
import Badge from '@/components/badge/badge';
import Button from '@/components/button/Button';
import Skeleton from '@/components/skeleton/Skeleton';
export default function App() {
  return (
    // <div className="flex min-h-screen w-screen flex-col gap-y-8 bg-zinc-500 p-5">
<div className='min-h-screen'>
{/* <div className=' bg-gray-600 flex justify-center items-center p-4'>
         <div className='pr-2'>
          <Skeleton className='w-8 h-8 rounded-full'>

          </Skeleton>
         </div>
         <div className='flex flex-col justify-center items-start gap-2'>
          <Skeleton className='w-20 h-5 rounded-xl'></Skeleton>
          <Skeleton className='w-32 h-5 rounded-xl'></Skeleton>
         </div>
      </div> */}

{/* <div className="relative flex w-64 animate-pulse gap-2 p-4">
  <Skeleton className="h-12 w-12 rounded-full bg-slate-400"></Skeleton>
  <div className="flex-1">
    <Skeleton className="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></Skeleton>
    <Skeleton className="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></Skeleton>
  </div>
  <Skeleton className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></Skeleton>
</div>
</div>
       */}

<div className="max-w-[300px] w-full flex items-center gap-3">
      <div>
        <Skeleton className="flex rounded-full w-12 h-12" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-3 w-3/5 rounded-lg" />
        <Skeleton className="h-3 w-4/5 rounded-lg" />
      </div>
    </div>

    // </div>
    )
}





