import {PiMedalFill} from "react-icons/pi";
import {FaSchool} from "react-icons/fa";
import SectionDetail from "../components/SectionDetail";

export default function AboutSection() {
    return <div id='about' className='about pt-2'>
        <SectionDetail sectionDetail={ {title: 'About Me', caption: 'Get to know more'} }/>

        <div className='grid lg:grid-cols-5'>
            <div className='flex justify-center lg:col-span-2 pb-5'>
                <img src="/asset/img/profile_2.png"
                     className="rounded-xl w-full max-w-[300px] max-h-[350px] md:max-w-[350px] md:max-h-[400px] lg:max-w-[400px] lg:max-h-[450px]"
                     alt="profile pic"/>
            </div>
            <div className='lg:col-span-3 pl-5'>
                <div className='grid grid-cols-1 md:px-32 lg:px-0 lg:grid-cols-2 gap-y-4 lg:gap-x-5 lg:gap-y-0'>
                    <div
                        className='border-2 border-gray-300 rounded-2xl p-5 flex flex-col items-center justify-center group hover:bg-gray-700 hover:scale-105 '>
                        <PiMedalFill className='rounded-full text-4xl group-hover:text-white'/>
                        <p className='font-bold group-hover:text-white'>Experience</p>
                        <p className='group-hover:text-white'>1+ Years</p>
                        <p className='group-hover:text-white'>Full Stack Development</p>
                    </div>
                    <div
                        className='border-2 border-gray-300 rounded-2xl p-5 flex flex-col items-center justify-center group hover:bg-gray-700 hover:scale-105'>
                        <FaSchool className='rounded-full text-4xl group-hover:text-white'/>
                        <p className='font-bold group-hover:text-white'>Education</p>
                        <p className='group-hover:text-white'>ECE Bachelors of Engineering</p>
                        <p className='text-center group-hover:text-white'>PSNA College Of Engineering And Technology</p>
                    </div>
                </div>

                <div className='md:px-32 lg:px-0 flex flex-col gap-2 py-2 pt-4'>
                    <h4 className='font-bold text-xl'>Passionate</h4>
                    <p>A hardworking and passionate student with strong organizational skills. Loves
                        collaborating with teammates to develop and implement creative technical solutions to
                        challenging problems.</p>

                    <h4 className='font-bold text-xl'>Ambitious</h4>
                    <p>I always share my positive attitude with the environment. Furthermore, I am adept at
                        handling multiple tasks on a daily basis competently and at working well under
                        pressure</p>
                </div>
            </div>
        </div>
    </div>
}