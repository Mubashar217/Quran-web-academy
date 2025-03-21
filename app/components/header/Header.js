import React from 'react';
import Button from './../button/Button';

function Header(props) {
  return (
    <div className="bg-[url('/new2.jpg')] hover:bg-[url('/quran.jpg')] h-150 bg-cover bg-center flex flex-col justify-center items-center transition-all duration-3000 ease-in-out cursor-pointer">
      <p className='text-white font-bold text-center text-3xl lg:p-40 md:p-20 sm:p-10 font-serif hover:text-4xl transition-all duration-3000 ease-in-out  '>
      إِنَّ هَذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ وَيُبَشِّرُ الْمُؤْمِنِينَ الَّذِينَ يَعْمَلُونَ الصَّالِحَاتِ أَنَّ لَهُمْ أَجْرًا كَبِيرًا[9]
      <br />
      </p>

      <div className="mt-8 ">
        <Button item="Apply Now" />
      </div>
    </div>
  );
}

export default Header;
