import React, { useEffect, useState } from 'react';

const FresherSection = ({ company }) => {
    const { Name, workOn, location, jobType } = company;
    return (
        <div className='p-5 bg-slate-100 flex justify-between items-center'>
            <div>
                <div className='flex space-x-5'>
                    <h3 className='text-3xl'>{workOn}</h3>
                    <p className="px-3 py-1 rounded-3xl  font-medium  text-white  bg-blue-600  ">
                        {jobType}
                    </p>
                </div>
                <div className='flex text-lg space-x-6 '>
                    <p><span className='font-medium'>Company: </span>{Name}</p>
                    <p><span className='font-medium'>Location: </span>{location}</p>
                </div>

            </div>
            <div>
                <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Apply
                </button>
            </div>
        </div>
    );
};

export default FresherSection;