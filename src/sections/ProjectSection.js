import SectionDetail from "./SectionDetail";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
    return <div id='project' className='project pt-2'>
        <SectionDetail sectionDetail={{title: 'Projects', caption: 'Browse My Recent'}}/>

        <div className='grid lg:grid-cols-3 gap-5 md:px-32 lg:px-0'>
            <ProjectCard projectDetail={{title:'Blog', description:'', img_src:'/asset/img/blog.png'}}/>
            <ProjectCard projectDetail={{title:'Admin Panel', description:'', img_src:'/asset/img/admin.png'}}/>
            <ProjectCard projectDetail={{title:'E-Commerce', description:'', img_src:'/asset/img/e-commerce-logo.png'}}/>
        </div>
    </div>
}