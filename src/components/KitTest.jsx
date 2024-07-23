import React from 'react';
import { BsHouseFill, BsClockFill, BsClipboard2HeartFill } from 'react-icons/bs';

const KitTest = ({ data }) => {



    return (
        <div className='flex flex-col lg:flex-row justify-center items-center w-full max-w-[1220px]'>
            <div className={`w-full flex justify-center items-start flex-col ${data && data.imageKit && 'lg:w-[49%]'}`}>
                {data.steps.map((step, index) => (
                    <div key={index} className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" defaultChecked={index === 0} />
                        <div className="collapse-title text-lg font-medium">
                            <div className='flex gap-5'>
                                <div className='p-3 rounded-full flex justify-center items-center'>

                                </div>
                                <div>
                                    <label className='font-manropeBold text-xl'>
                                        {step.title}
                                    </label>
                                    <div>
                                        {step.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="collapse-content pl-24 text-lg">
                            <ul>
                                {step.content.map((item, i) => (
                                    <li key={i}>- {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            {data && data.imageKit && <div className='w-full lg:w-[49%] flex justify-center items-center p-2'>
                <img src={data.imageKit} alt='img' className='w-[500px] h-[500px]' />
            </div>}
        </div>
    );
};

export default KitTest;
