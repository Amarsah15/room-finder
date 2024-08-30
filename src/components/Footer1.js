import React from 'react';

function Footer1() {
  return (
    <footer className="bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">FlatMate®</h2>
          <p>Unit no. 1227, 1228, <br/> Tower C in Alphathum, Sector 90,<br/> Noida - 201305</p>
          <p className="mt-2"><a href="mailto:feedback@flatmate.in" className="underline hover:text-gray-200">feedback@flatmate.in</a></p>
          <button className="mt-4 px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700">Contact us</button>
          <div className="mt-4 flex gap-4">
            <a href="/#" className="text-gray-200 hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
            <a href="/#" className="text-gray-200 hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
            <a href="/#" className="text-gray-200 hover:text-gray-400"><i className="fab fa-instagram"></i></a>
            <a href="/#" className="text-gray-200 hover:text-gray-400"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="mb-4 md:mb-0 md:ml-8">
          <h3 className="text-xl font-bold mb-2">About</h3>
          <ul className="space-y-2">
            <li><a href="/#" className="hover:text-gray-200">Company</a></li>
            <li><a href="/#" className="hover:text-gray-200">Terms & Conditions</a></li>
            <li><a href="/#" className="hover:text-gray-200">Privacy Policy</a></li>
            <li><a href="/#" className="hover:text-gray-200">Careers</a></li>
            <li><a href="/#" className="hover:text-gray-200">Blogs</a></li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0 md:ml-8">
          <h3 className="text-xl font-bold mb-2">Flatmates</h3>
          <ul className="space-y-2">
            <li><a href="/#" className="hover:text-gray-200">Flatmates in Delhi</a></li>
            <li><a href="/#" className="hover:text-gray-200">Flatmates in Noida</a></li>
            <li><a href="/#" className="hover:text-gray-200">Flatmates in Gurgaon</a></li>
            <li><a href="/#" className="hover:text-gray-200">Flatmates in Bangalore</a></li>
            <li><a href="/#" className="hover:text-gray-200">Flatmates in Pune</a></li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0 md:ml-8">
          <h3 className="text-xl font-bold mb-2">PGs</h3>
          <ul className="space-y-2">
            <li><a href="/#" className="hover:text-gray-200">PG in Delhi</a></li>
            <li><a href="/#" className="hover:text-gray-200">PG in Noida</a></li>
            <li><a href="/#" className="hover:text-gray-200">PG in Gurgaon</a></li>
            <li><a href="/#" className="hover:text-gray-200">PG in Bangalore</a></li>
            <li><a href="/#" className="hover:text-gray-200">PG in Pune</a></li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0 md:ml-8">
          <h3 className="text-xl font-bold mb-2">Our Services</h3>
          <ul className="space-y-2">
            <li><a href="/#" className="hover:text-gray-200">Rental Agreement</a></li>
            <li><a href="/#" className="hover:text-gray-200">Tenant Verification</a></li>
            <li><a href="/#" className="hover:text-gray-200">Buy Furniture</a></li>
            <li><a href="/#" className="hover:text-gray-200">Rent Receipt</a></li>
            <li><a href="/#" className="hover:text-gray-200">Manage Your Flat</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer1;
