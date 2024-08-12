import {FaLinkedin} from "react-icons/fa6";
import {FaGithub} from "react-icons/fa";

export default function ProfileSection() {
    return <div
        className="profile-section xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center min-h-[65vh]">
        <div className="flex justify-center items-center">
            <img src="/asset/img/profile.jpg"
                 className="rounded-full w-full max-w-[300px] max-h-[350px] lg:max-w-[400px] lg:max-h-[450px]"
                 alt="profile pic"/>
        </div>
        <div className="profile-detail flex flex-col gap-3 justify-center items-center">
            <p className='text-xl'>Hello I'm</p>
            <h4 className='text-4xl font-semibold'>Nagarajan Selvaraj</h4>
            <h5><span className='typewriter w-fit text-3xl font-medium'>Full Stack Developer</span></h5>
            <div className='flex flex-row gap-2'>
                <button id='download-cv'
                        className='bg-white text-black font-semibold py-2 px-4 border-2 border-black rounded-full hover:scale-105'>Download
                    CV
                </button>
                <a href='#contact'
                   className="bg-black text-white font-semibold py-2 px-4 border border-black rounded-full hover:scale-105">Contact
                    Info
                </a>
            </div>
            <div className='flex flex-row gap-2'>
                <a target='_blank' href='https://www.linkedin.com/in/nagarajan-s-727014234/'><FaLinkedin
                    className='rounded-full text-3xl hover:scale-105'/></a>
                <a target='_blank' href='https://github.com/NAGARAJAN22'><FaGithub
                    className='rounded-full text-3xl hover:scale-105'/></a>
            </div>
        </div>
    </div>
}