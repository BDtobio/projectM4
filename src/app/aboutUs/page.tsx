import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">About Us</h2>
                    <p className="text-lg text-gray-600">
                        At Apple, we are committed to creating innovative products that improve the lives of our customers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col justify-center items-start">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                        <p className="text-lg text-gray-600 mb-6">
                            Our mission is to create the best products on earth, designed with precision and powered by the most advanced technology. We believe in the power of innovation and simplicity to make a meaningful impact in the world.
                        </p>
                        <a
                            href="/"
                            className="inline-block text-blue-600 hover:text-blue-800 text-lg font-semibold"
                        >
                            Learn More
                        </a>
                    </div>

                    <div className="relative w-full h-full">
                        <Image
                            src="https://www.apple.com/v/home/aj/images/heroes/iphone-13-pro/hero_iphone_13_pro__dflnfhft73ei_large.jpg"
                            alt="Apple Product"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-lg text-gray-600">
                        Join us in shaping the future of technology, with groundbreaking innovations that empower individuals and change industries.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
