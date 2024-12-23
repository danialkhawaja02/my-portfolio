import { Facebook02Icon, NewTwitterIcon,  InstagramIcon, Linkedin02Icon, GithubIcon  } from 'hugeicons-react';
import SocialIcons from './SocialIcons';
import Button from './Button';
import { HashLink } from 'react-router-hash-link';

export default function SideBar() {
    return(
        <>
          <div className="lg:top-[2.5rem] lg:w-12/12">
             <div className="flex flex-col gap-5 bg-[#161616] px-[2rem] py-[1.5rem] rounded-[2rem] border border-[#303033]">
                <h2 className="text-3xl font-bold">Hello Everyone <span className="wavingHands">👋</span></h2>
                <img src="\src\assets\danial.png"  className="rounded-[3rem] h-[320px] object-cover"/>
                <div className='flex flex-col gap-1'>
                    <p>Specialization:</p>
                    <h2 className="text-lg font-bold">WordPress & Front-End Development</h2>
                    <div className='py-3 flex gap-3 flex-wrap'>
                        <SocialIcons icon={Facebook02Icon} link="https://www.youtube.com/@devnial02"/>
                        <SocialIcons icon={NewTwitterIcon} link="https://x.com/danialsohail02"/>
                        <SocialIcons icon={InstagramIcon} link="https://www.instagram.com/danialsohail02" />
                        <SocialIcons icon={Linkedin02Icon} link="https://www.linkedin.com/in/danialsohail02" />
                        <SocialIcons icon={GithubIcon} link="https://github.com/danialkhawaja02"/>
                    </div>
                    <div>
                        <HashLink to="/#contact" smooth>
                            <Button title="Let's Work Together"/>
                        </HashLink>
                    </div>
                </div>
             </div>
          </div>
        </>
    )
}