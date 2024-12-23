import { useState } from "react";
import Modal from "./Modal";



export default function ProjectBox({ onMouseEnter, onMouseLeave, image, image1, title, description, link }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div 
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <img onClick={()=>setShowModal(true)} src={image} className="rounded-[50px] zoominEffect cursor-none" />
                {showModal && <Modal onClose={()=> setShowModal(false)} title={title} description={description} image={image1} link={link}/>}
            </div>
        </>
    );
}
