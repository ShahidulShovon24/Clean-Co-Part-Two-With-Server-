import React from 'react';
import Bucket from '../../assets/bucketgirl.png'

const Landing = () => {
    return (
        <div className='relative'>
            <div class='hero h-screen lg:h-[75vh] bg-accent relative z-10 mt-16'>
                <div class='hero-content flex-col lg:flex-row'>
                    <div data-aos="fade-up-left">
                        <p
                            data-aos='fade-right'
                            data-aos-duration='2000'
                            data-aos-delay='200'
                            className='text-xl'
                        >
                            Best Quality
                        </p>
                        <h1
                            data-aos='fade-right'
                            data-aos-delay='400'
                            data-aos-duration='1200'
                            class='text-5xl font-bold'
                        >
                            Professional Cleaning <br/> Service
                        </h1>
                        <p
                            data-aos='fade-right'
                            data-aos-delay='600'
                            data-aos-duration='800'
                            class='py-6 max-w-xl'
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.<br/> Lorem Ipsum has
                        </p>
                        <button
                            data-aos='zoom-in'
                            data-aos-delay='1300'
                            class='btn btn-primary'
                        >
                            Get Started
                        </button>
                    </div>
                    <div data-aos="zoom-out" data-aos-delay="50" data-aos-duration="2000" className='h-[60vh] shrink-0'>
                        <img src={Bucket} class='h-full' alt='' />
                    </div>
                </div>
            </div>
            <div className='mb-20 rounded-2xl mx-auto mt-[-50px] relative z-20 bg-neutral shadow-lg p-10 w-5/6'>
                <h1 className='text-3xl mb-5 text-primary'>Get Free Estimate</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                    <input
                        type='text'
                        placeholder='Your Name'
                        class='input input-bordered w-full'
                    />
                    <input
                        type='number'
                        placeholder='Your Phone Number'
                        class='input input-bordered w-full'
                    />
                    <input
                        type='text'
                        placeholder='Type of Cleaning'
                        class='input input-bordered w-full'
                    />
                    <input
                        type='text'
                        placeholder='Type of Cleaning'
                        class='input input-bordered w-full'
                    />
                    <input
                        type='text'
                        placeholder='Number of Bedrooms'
                        class='input input-bordered w-full'
                    />
                    <input
                        type='text'
                        placeholder='Number of Bedrooms'
                        class='input input-bordered w-full'
                    />
                    <input
                        type='text'
                        placeholder='Frequency of Cleaning'
                        class='input input-bordered w-full'
                    />
                    <input
                        type='text'
                        placeholder='Type of Cleaning'
                        class='input input-bordered w-full'
                    />
                </div>
                <button className='btn btn-primary mt-5'>REQUEST A QOUTE</button>
            </div>
        </div>
    );
};

export default Landing;