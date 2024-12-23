


export default function Button({icon : Icon, title}) {
    return (
        <>
        <div>
            <button className='flex justify-center items-center gap-3 buttonColor text-lg text-[#161616] font-semibold px-4 py-2 rounded-[2rem] w-full'>
                {title} 
                {Icon && <Icon size={24} />}
            </button>
        </div>
        </>

    )
}