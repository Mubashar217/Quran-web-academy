import React from 'react';
import Button from './../button/Button';

function Header(props) {
  return (
    <div className="bg-[url('/quran7.jpg')] h-150 bg-cover bg-center flex flex-col justify-center items-center">
      <p className='text-white font-bold text-center text-3xl lg:p-40 md:p-20 sm:p-10'>
        Learn, Love & Live the Quran... Everyday!<br />
        Discover technology-based resources to connect with the Quran in these modern times.
      </p>

      <div className="mt-8 ">
        <Button item="Apply Now" />
      </div>
    </div>
  );
}

export default Header;
