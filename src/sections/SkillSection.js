import { TiTick } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

export default function SkillSection({ skillDetail }) {
    const [width, setWidth] = useState('0%');
    const [rank, setRank] = useState('');
    const skillRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setWidth(skillDetail.percentage + '%');
                        setRank(() => {
                            if(skillDetail.percentage >= 70 && skillDetail.percentage <= 85) {
                                return 'intermediate'
                            } else if (skillDetail.percentage > 85) {
                                return 'expert'
                            } else {
                                return 'beginners'
                            }
                        })
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 } // Adjusted to trigger the animation earlier
        );

        if (skillRef.current) {
            observer.observe(skillRef.current);
        }

        return () => {
            if (skillRef.current) {
                observer.unobserve(skillRef.current);
            }
        };
    }, [skillDetail.percentage]);

    const style = {
        width: width,
        transition: 'width 2s ease-in-out',
    };

    return (
        <div className='flex flex-col gap-2 px-4' ref={skillRef}>
            <div className='flex flex-row'>
                <TiTick className='text-xl text-white bg-black rounded-full mr-3' />
                <div className='flex flex-col'>
                    <span className='font-medium'>{skillDetail.name}</span>
                    <span className='font-light text-sm'>{ rank ? rank : ''}</span>
                </div>

            </div>
            <div className='flex'>
                <div
                    className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                    role="progressbar" aria-valuenow={skillDetail.percentage} aria-valuemin="0" aria-valuemax="100">
                    <div
                        className="flex flex-col justify-center rounded-full overflow-hidden bg-gray-700 text-xs text-white text-center whitespace-nowrap transition duration-500"
                        style={style}>
                        {width} {/* Display the animated width value */}
                    </div>
                </div>
            </div>
        </div>
    );
}
