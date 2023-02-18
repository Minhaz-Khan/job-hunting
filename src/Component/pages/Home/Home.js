import { Player } from '@lottiefiles/react-lottie-player';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import bgImage from '../../../image/bg-image.png'
import ExtraSection from './ExtraSection';
import image1 from '../../../image/extra image/collaboration.png'
import image2 from '../../../image/extra image/contract.png'
import image3 from '../../../image/extra image/profile.png'
import image4 from '../../../image/extra image/search.png'
import FresherSection from './FresherSection';
import ExperiancedSection from './ExperiancedSection';
import TopItSection from './TopItSection';

const Home = () => {
    const [companyData, setCompanyData] = useState('')
    useEffect(() => {
        fetch('companyData.json')
            .then(res => res.json())
            .then(data => setCompanyData(data))
    }, [])
    const { fresher, Experienced, top_id_Compnay } = companyData;
    console.log(companyData);
    const extraSection = [
        {
            image: image1,
            title: "Easy To Manage Jobs",
            info: "A small river named Duden flows by their place and supplies."

        },
        {
            image: image2,
            title: "Search Millions of Jobs",
            info: "A small river named Duden flows by their place and supplies."
        },
        {
            image: image3,
            title: "Search Expert Candidates",
            info: "A small river named Duden flows by their place and supplies."
        },
        {
            image: image4,
            title: "Top Careers",
            info: "A small river named Duden flows by their place and supplies."
        }
    ]
    return (
        <div>
            <div style={{ backgroundImage: `url(${bgImage})` }}>
                <div className='container mx-auto flex justify-around w-full'>
                    <div className='flex items-center justify-center'>
                        <div className='space-y-5 '>
                            <h5 className='text-lg text-gray-500'>We have <CountUp end={85000} duration={5} /> great job offers you deserve!</h5>
                            <h1 className='text-7xl font-bold font-Pacifico'>Your Dream <span className='text-[#f18e7d]'>Job</span> <br /> is Waiting</h1>
                            <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                Subscrip
                            </button>
                        </div>
                    </div>
                    <div className='h-[600px]'>
                        <Player
                            autoplay
                            loop
                            src="https://assets1.lottiefiles.com/packages/lf20_ra7lnwkb.json"
                            style={{ height: '600px', width: '600px' }}
                        >

                        </Player>
                    </div>
                </div>

            </div>
            <div className='bg-gray-100 py-10'>
                <div className='flex container mx-auto justify-evenly'>
                    {
                        extraSection.map((sectionInfo, index) => <ExtraSection key={index} sectionInfo={sectionInfo} />)
                    }
                </div>
            </div>
            <div className='container mx-auto'>
                <div className=' px-10 space-y-3 mt-10'>
                    <h2 className='text-center text-5xl font-JosefinSans'>Fresher Jobs</h2>
                    {companyData && fresher.map(company => < FresherSection company={company} key={company.id} />)}
                </div>
                <div className=' px-10 space-y-3 mt-10'>
                    <h2 className='text-center text-5xl font-JosefinSans'>Experienced Jobs</h2>
                    {companyData && Experienced.map(company => < ExperiancedSection company={company} key={company.id} />)}
                </div>
                <div className=' px-10 space-y-3 mt-10'>
                    <h2 className='text-center text-5xl font-JosefinSans'>Experienced Jobs</h2>
                    <div className='grid grid-cols-3 gap-5 justify-items-center'>
                        {companyData && top_id_Compnay.map(company => < TopItSection company={company} key={company.id} />)}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;