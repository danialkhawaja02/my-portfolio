import { StarsIcon } from 'hugeicons-react';

export default function IntroTitle({title}) {
    return(
        <>
         <div className='flex'>
            <div className='flex gap-3 items-center border border-[#303033] rounded-[3rem] px-[14px] py-[5px]'>
                <StarsIcon  size={20}/>
                <span className='text-base font-semibold'>{title}</span>
            </div>
         </div>
        </>
    )
}