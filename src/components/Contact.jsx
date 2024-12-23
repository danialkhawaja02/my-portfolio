import { Facebook02Icon, NewTwitterIcon,  InstagramIcon, Linkedin02Icon, GithubIcon  } from 'hugeicons-react';
import SocialIcons from './SocialIcons';


export default function Contact() {
    return(
        <>
          <div className='flex flex-col gap-5 height' id='contact'>
            <div className='py-3 flex gap-5 sm:gap-10 flex-row flex-wrap'>
                        <SocialIcons icon={Facebook02Icon} link="https://www.youtube.com/@devnial02" type="footer"/>
                        <SocialIcons icon={NewTwitterIcon} link="https://x.com/danialsohail02" type="footer"/>
                        <SocialIcons icon={InstagramIcon} link="https://www.instagram.com/danialsohail02" type="footer"/>
                        <SocialIcons icon={Linkedin02Icon} link="https://www.linkedin.com/in/danialsohail02" type="footer"/>
                        <SocialIcons icon={GithubIcon} link="https://github.com/danialkhawaja02" type="footer"/>
            </div>
            <div className="titleColor text-[1.5rem] sm:text-[2.5rem] leading-[1em] font-bold sm:leading-[2.5rem]">
                <h2>Want to know more about me, tell me about your project or just to say hello? Drop me a line and I'll get back as soon as possible.</h2>
            </div> 
            <div className="flex flex-col md:flex-row gap-5 border-t border-[#303033] py-5">
                <div className="w-4/12">
                    <h2 className="text-xl font-bold">Location</h2>
                    <p>Lahore, Pakistan</p>
                </div>
                <div className="w-4/12">
                    <h2 className="text-xl font-bold">Phone</h2>
                    <p>+92 322-4918232</p>
                </div>
                <div className="w-4/12">
                    <h2 className="text-xl font-bold">Email</h2>
                    <p>danialkhawaja02@gmail.com</p>
                </div>
            </div>
          </div>
        </>
    )
}


