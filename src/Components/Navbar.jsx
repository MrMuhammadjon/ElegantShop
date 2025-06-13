import { useState, useEffect, useRef } from 'react';
import { RiDiscountPercentLine } from "react-icons/ri";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Eng tepada ekanligini aniqlash
      setAtTop(currentScrollY <= 50);
      
      // Pastga scroll qilganda (va 200px dan oshganda) yashirish
      if (currentScrollY > prevScrollY.current && currentScrollY > 200) {
        setVisible(false);
      } 
      // Tepaga scroll qilganda chiqarish
      else if (currentScrollY < prevScrollY.current) {
        setVisible(true);
      }
      
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`
      fixed top-0 left-0 w-full z-50 bg-white shadow-md
      transition-transform duration-300 ease-in-out
      ${visible ? 'translate-y-0' : '-translate-y-full'}
      ${atTop ? '!bg-transparent !shadow-none' : ''}
    `}>
      <div className="container mx-auto px-4 py-4 bg-white">
        <div className="">
            <h1>
                <RiDiscountPercentLine />
            </h1>
        </div>
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold">Logo</div>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#" className="hover:text-blue-500">About</a></li>
            <li><a href="#" className="hover:text-blue-500">Services</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;