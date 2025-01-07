// pages/about-us.js
import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-grow">
        <section className="py-16 mt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">About Us</h2>
              <p className="text-lg text-gray-600">
                At Apple, we are committed to creating innovative products that enrich lives.
              </p>
            </div>

            {/* Mission and Vision Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col justify-center items-start">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Our mission is to design the best products on earth, powered by cutting-edge technology and an unwavering dedication to innovation and simplicity.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-600">
                  To leave the world better than we found it, through sustainable practices, empowering people, and driving change across industries.
                </p>
              </div>

              {/* Image Section */}
              <div className="relative w-full h-80 md:h-auto">
                <Image
                  src="https://www.apple.com/la/iphone/home/images/overview/consider_modals/innovation/modal_second__e1xvbvxfc5oy_large.jpg"
                  alt="Apple Product"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Join us in shaping the future of technology with groundbreaking innovations that empower individuals and industries worldwide.
              </p>
              <a
                href="/careers"
                className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700 transition"
              >
                Explore Careers
              </a>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default AboutUs;
