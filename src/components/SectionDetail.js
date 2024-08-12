export default function SectionDetail({sectionDetail}) {
    return <div className='mt-12 flex flex-col gap-3'>
        <p className='text-center mt-18'>{sectionDetail.caption}</p>
        <h1 className='font-bold text-5xl text-center pb-16 lg:mb-18'>{sectionDetail.title}</h1>
    </div>
}