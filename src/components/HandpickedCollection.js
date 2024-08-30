import React from 'react';
import Image1 from './images/img1.png';
import Image2 from './images/pg-with-wifi.jpeg';
import Image3 from './images/meals_included.png';
import Image4 from './images/students.jpg';
import Image5 from './images/single_rooms.png';
import Image6 from './images/for_professionals.png';
import './HandpickedCollection.css';

const HandpickedCollection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-6 md:p-8">
        {/* Text Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0 md:pr-6">
          <h2 className="text-3xl font-bold text-red-500 mb-4">
            Explore our
            <br />
            Handpicked Collections
            <br />
            of PG Homes
          </h2>
          <p className="text-gray-600">
            Discover a variety of PG homes tailored to your needs. Whether you're a student or a professional, find the perfect place that fits your lifestyle and budget.
          </p>
        </div>

        {/* Images Section */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-md overflow-hidden bg-gray-100 shadow-md">
            <img
              src={Image1}
              alt="Budget Friendly"
              className="w-full h-48 object-cover"
            />
            <p className="text-center font-bold text-red-500 mt-2">
              Budget Friendly
            </p>
          </div>
          <div className="rounded-md overflow-hidden bg-gray-100 shadow-md">
            <img
              src={Image2}
              alt="WIFI Included"
              className="w-full h-48 object-cover"
            />
            <p className="text-center font-bold text-red-500 mt-2">
              WIFI Included
            </p>
          </div>
          <div className="rounded-md overflow-hidden bg-gray-100 shadow-md">
            <img
              src={Image3}
              alt="Meals Included"
              className="w-full h-48 object-cover"
            />
            <p className="text-center font-bold text-red-500 mt-2">
              Meals Included
            </p>
          </div>
          <div className="rounded-md overflow-hidden bg-gray-100 shadow-md">
            <img
              src={Image4}
              alt="For Students"
              className="w-full h-48 object-cover"
            />
            <p className="text-center font-bold text-red-500 mt-2">
              For Students
            </p>
          </div>
          <div className="rounded-md overflow-hidden bg-gray-100 shadow-md">
            <img
              src={Image5}
              alt="Single Rooms"
              className="w-full h-48 object-cover"
            />
            <p className="text-center font-bold text-red-500 mt-2">
              Single Rooms
            </p>
          </div>
          <div className="rounded-md overflow-hidden bg-gray-100 shadow-md">
            <img
              src={Image6}
              alt="For Professionals"
              className="w-full h-48 object-cover"
            />
            <p className="text-center font-bold text-red-500 mt-2">
              For Professionals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandpickedCollection;
