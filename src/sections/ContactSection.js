import SectionDetail from "./SectionDetail";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa6";

export default function ContactSection() {
    return <div>
        <div id='contact' className='mt-60'>
            <SectionDetail sectionDetail={{title: 'Contact Me', caption: 'Get In Touch'}}/>
            <div className='flex justify-center'>
                <div className='border-2 rounded-3xl border-gray-300 flex flex-row gap-3 p-7 lg:px-12 group hover:bg-gray-700'>
                    <div className='flex flex-row justify-center items-center gap-2 group-hover:bg-gray-700 group-hover:text-white'>
                        <HiOutlineMailOpen className='text-3xl'/>nagarajan2002s@gmail.com
                    </div>
                    <div className='flex flex-row justify-center items-center gap-2 group-hover:text-white group-hover:scale-110'>
                        <FaLinkedin className='text-3xl'/><a href='https://www.linkedin.com/in/nagarajan-s-727014234/' target='_blank'>LinkedIn</a>
                    </div>
                </div>
            </div>

            <footer className='m-32'>
                <div className='flex justify-center items-center gap-10 text-xl font-medium menu-item'>
                    <a href='#about'>About</a>
                    <a href='#experience'>Experience</a>
                    <a href='#project'>Projects</a>
                    <a href='#contact'>Contact</a>
                </div>

                <div className='text-center mt-14'>Copyright &#169; 2023 Nagarajan. All Rights Reserved</div>
            </footer>
        </div>
    </div>
}