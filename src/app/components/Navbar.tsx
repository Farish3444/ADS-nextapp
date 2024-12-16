import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
       <div
      className="w-full bg-black border-b border-[rgb(212,210,206)] text-[rgb(249,247,242)] text-center py-2"
    >
      <p className="text-sm font-semibold uppercase">
        {/* LOVED BY 5,00,000+ WOMEN | 100% REFUND IF YOU DON'T ❤️ IT */}
        Designed for Women Who Deserve the Best | 100% Refund Guarantee!
      </p>
    </div>
    <nav className="flex justify-center items-center p-4 shadow-md bg-[#FFFF]">
      <div className="text-2xl font-bold flex gap-3">
        <Image src={'/ADS_logo.jpg'} width={50} height={50} alt='Logo' />
        <h1 className='text-red-500'>ALEEZA </h1> <h1 className='text-black'>DESIGN STUDIO</h1>
        </div>
    
    </nav>
    </>
  );
};

export default Navbar;
