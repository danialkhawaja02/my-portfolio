import { MessageMultiple01Icon, Home12Icon, UserSharingIcon, CheckListIcon, SourceCodeSquareIcon } from 'hugeicons-react';
import Button from './Button';
import { HashLink } from 'react-router-hash-link';



export default function Header() {
    return (
        <> 
            <div className="flex gap-10 justify-center lg:justify-between items-center fixed bottom-3 lg:bottom-[unset] left-[5%] sm:left-[2%] lg:left-[unset] w-[100%] lg:w-[unset] z-10">
                <div className='flex-1'>
                    <ul className="flex gap-[8px] sm:gap-[15px] lg:gap-6">
                        <li className='flex-1'>
                            <HashLink to="/#home" smooth className='font-medium text-lg px-5 py-2.5 linkStyle hidden lg:block'>Home</HashLink>
                            <span  className="lg:hidden"><Button icon={Home12Icon}/></span>
                        </li>
                        <li className='flex-1'>
                            <HashLink to="/#about" smooth className='font-medium text-lg px-5 py-2.5 linkStyle hidden lg:block'>About</HashLink>
                            <span  className="lg:hidden"><Button icon={UserSharingIcon}/></span>
                        </li>
                        <li className='flex-1'>
                            <HashLink to="/#portfolio" smooth className='font-medium text-lg px-5 py-2.5 linkStyle hidden lg:block'>Portfolio</HashLink>
                            <span  className="lg:hidden"><Button icon={SourceCodeSquareIcon}/></span>
                        </li>
                        <li className='flex-1'>
                            <HashLink to="/#experience" smooth className='font-medium text-lg px-5 py-2.5 linkStyle hidden lg:block'>Experience</HashLink>
                            <span  className="lg:hidden"><Button icon={CheckListIcon}/></span>
                        </li>
                        <li className='flex-1'>
                            <HashLink to="/#contact" smooth className='font-medium text-lg px-5 py-2.5 linkStyle hidden lg:block'>Contact</HashLink>
                            <span  className="lg:hidden"><Button icon={MessageMultiple01Icon}/></span>
                        </li>
                    </ul>
                </div>
                <div>
                    <span  className="hidden xl:block">
                     <a href='https://www.linkedin.com/in/danialsohail02'>
                        <Button icon={MessageMultiple01Icon} title="Let's Connect"  />
                     </a>
                    </span>
                </div>
            </div>
        </>
    )
}