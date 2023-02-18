import React from 'react';

const TopItSection = ({ company }) => {
    const { Name, info, location } = company
    return (
        <div class="w-full h-60 max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800 relative">

            <div>
                <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">{Name}</h1>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">{info}</p>
            </div>

            <div className=''>
                <div class="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                    <span>Visit on: {location}</span>

                </div>

            </div>
            <button className='mx-auto px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 absolute bottom-2'>View Details</button>
        </div>
    );
};

export default TopItSection;