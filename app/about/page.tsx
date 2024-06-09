'use client'
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="container mx-auto">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Us</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Welcome to our website! We are dedicated to providing the best content and resources for our audience. Our mission is to deliver valuable insights and information on a variety of topics.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our mission is to inspire and educate our readers by providing high-quality, engaging content that covers a wide range of subjects. We strive to create a community where knowledge is shared and curiosity is encouraged.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/150" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4"/>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">John Doe</h3>
              <p className="text-gray-600 dark:text-gray-300">Founder & CEO</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/150" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4"/>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Jane Smith</h3>
              <p className="text-gray-600 dark:text-gray-300">Chief Editor</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/150" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4"/>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Emily Johnson</h3>
              <p className="text-gray-600 dark:text-gray-300">Content Writer</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
