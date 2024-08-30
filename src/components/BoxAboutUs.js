import React from 'react';
import building from './images/verified-20k-list.svg'
import monthly from './images/unique-monthly-users.svg'
import data from './images/data-30-point.svg'

const BoxAboutUs = () => {
  return (
    <div className="rounded-sm bg-[#e8e8e8] shadow-md p-6 m-4">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex items-center flex-col justify-center">
          <img
            src={building}
            alt="Verified Listings"
            className="w-24 h-24"
          />
          <h2 className="text-xl font-bold ml-4">20K+ Verified Listings</h2>
          <div>
          <p className="text-gray-700  ">
            Choose from thousands of 100% genuine <br/> <span className='flex justify-center'>PG homes. Single room or a shared
            one,</span> <span className='flex justify-center'>we have got it all.</span>
          </p>
        </div>
        </div>
        <div className="flex items-center flex-col">
          <img
            src={monthly}
            alt="Unique Monthly Users"
            className="w-24 h-24"
          />
          <h2 className="text-xl font-bold ml-4">75,000+ Unique Monthly Users</h2>
          <div>
          <p className="text-gray-700">
            Trust us to find the right tenant for you <span className='flex justify-center'>as we have the reach that
            most other</span>  <span className='flex justify-center'>platforms do not.</span> 
          </p>
        </div>
        </div>
        <div className="flex items-center flex-col">
          <img
            src={data}
            alt="Data Points Per PG"
            className="w-24 h-24"
          />
          <h2 className="text-xl font-bold ml-4">300+ Data Points Per PG</h2>
          <div>
          <p className="text-gray-700">
            We are here to make it easier for you to <span className='flex justify-center'> select a PG with the highest
            number of </span> <span className='flex justify-center'>data points in the Industry.</span> 
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BoxAboutUs;
