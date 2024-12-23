import { MultiplicationSignIcon, ArrowUpRight01Icon} from 'hugeicons-react';


export default function Modal({onClose, title, description, image, link}) {
    return(
        <>
            <div className="bg-[#212121] fixed inset-0 flex flex-col justify-start items-center py-5 px-2 md:px-[unset] z-20">
                <div className='place-self-end pr-5'><MultiplicationSignIcon size={32} onClick={onClose} className='hover:cursor-pointer'/></div>
                <img src={image} className="rounded-[5px]" />
                <div className='flex gap-2 flex-col justify-center items-center bg-[#141414] rounded-[36px] w-full lg:w-2/5 p-6 mt-3'>
                    <h2 className='text-2xl text-center font-bold'>{title}</h2>
                    <p className='text-center'>{description}</p>
                    <a href={link} target='blank'>
                        <button className='flex justify-center items-center gap-2 rounded-[15px] px-3 py-1 buttonColor text-[#161616]'>View Website <ArrowUpRight01Icon/></button>
                    </a>
                </div>
            </div>
        </>
    );
}