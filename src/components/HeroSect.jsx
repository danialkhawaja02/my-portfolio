import Button from "./Button";
import IntroTitle from "./IntroTitle";
import { GridViewIcon, Download04Icon  } from 'hugeicons-react';
import { HashLink } from 'react-router-hash-link';

export default function HeroSect() {
    return(
        <>
            <div className="flex flex-col gap-10 height py-10" id="home">
                <IntroTitle title="Let's Meet!" />
                <div className="titleColor text-[2.5rem] sm:text-[4rem] leading-[1em] font-semibold leading-[4rem]">
                    <h2>I'm Danial Sohail</h2>
                    <h2>WordPress & Front-End Developer</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-5">
                    <HashLink to="/#portfolio" smooth><
                        Button title="My Projects" icon={GridViewIcon}/>
                    </HashLink>
                    <a href="https://drive.google.com/file/d/1hH242yl2AeztMHA1nFBe1ni2MfmJmPMA/view?usp=sharing">
                        <Button title="Download My Resume" icon={Download04Icon}/>
                    </a>
                </div>
            </div>
        </>
    )

}