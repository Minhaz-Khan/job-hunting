import React from 'react';

const ExtraSection = ({ sectionInfo }) => {
    const { image, title, info } = sectionInfo;
    return (
        <div className='w-80'>
            <img src={image} alt="" className='w-14 h-14' />
            <h3 className='font-medium text-lg mb-4'>{title}</h3>
            <p>{info}</p>
        </div>
    );
};

export default ExtraSection;