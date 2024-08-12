import {TiTick} from "react-icons/ti";
import SkillSection from "./SkillSection";
import SectionDetail from "../components/SectionDetail";

export default function ExperienceSection() {
    return <div>
        <div id='experience' className='experience pt-2'>
            <SectionDetail sectionDetail={ {title: 'Experience', caption: 'Explore My'} }/>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 md:px-32 lg:px-0'>
                <div className='border-2 border-gray-300 rounded-2xl p-5'>
                    <h4 className='font-bold text-xl text-center pb-6'>Frontend Development</h4>
                    <div className='grid grid-cols-1 lg:grid-cols-2 p-5 gap-y-8 lg:gap-x-5 lg:gap-y-8'>
                        <SkillSection skillDetail={{name: 'HTML', percentage: '100'}}/>
                        <SkillSection skillDetail={{name: 'CSS', percentage: '75'}}/>
                        <SkillSection skillDetail={{name: 'Bootstrap', percentage: '90'}}/>
                        <SkillSection skillDetail={{name: 'Tailwind', percentage: '75'}}/>
                        <SkillSection skillDetail={{name: 'Jquery', percentage: '80'}}/>
                        <SkillSection skillDetail={{name: 'JavaScript', percentage: '70'}}/>
                        <SkillSection skillDetail={{name: 'React', percentage: '70'}}/>
                    </div>
                </div>

                <div className='border-2 border-gray-300 rounded-2xl p-5'>
                    <h4 className='font-bold text-xl text-center pb-6'>Backend Development</h4>
                    <div className='grid grid-cols-1 lg:grid-cols-2 p-5 gap-y-8 lg:gap-x-5 lg:gap-y-8'>
                        <SkillSection skillDetail={{name: 'PHP', percentage: '70'}}/>
                        <SkillSection skillDetail={{name: 'Laravel', percentage: '80'}}/>
                        <SkillSection skillDetail={{name: 'MySql', percentage: '70'}}/>
                        <SkillSection skillDetail={{name: 'MVC', percentage: '80'}}/>
                        <SkillSection skillDetail={{name: 'Git', percentage: '90'}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}