export default function ProjectCard ({projectDetail}) {
    return <div className='border-2 border-gray-300 rounded-2xl p-3'>
        <div className='grid grid-row-5 justify-center '>
            <img className='row-span-3 rounded-2xl w-[400px] h-[350px]' src={projectDetail.img_src}/>

            <div className='row-span-2 flex flex-col gap-3 justify-center'>
                <h5 className='text-center  font-bold'>{projectDetail.title}</h5>
                <div className='flex flex-row gap-4 justify-center pb-4'>
                    <button className='p-3 w-32 border border-gray-500 font-medium rounded-full hover:scale-105 hover:bg-gray-700 hover:text-white'>Github</button>
                    <button className='p-3 w-32 border border-gray-500 font-medium rounded-full  hover:scale-105 hover:bg-gray-700 hover:text-white'>Live Demo</button>
                </div>
            </div>
        </div>
    </div>
}