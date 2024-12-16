import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type DropdownItem = {
  title: string;
  link: string;
};

type DropdownProps = {
  items: DropdownItem[];
  title: string;
};

const Dropdown: React.FC<DropdownProps> = ({ items, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="relative group">
      <div
        className="px-4 py-2 dark:text-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {title}
      </div>

      {isOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
          {items.map((item, index) => (
            <li key={index} className="px-4 py-2 hover:bg-gray-100">
              <Link to={item.link} className="block text-gray-800">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Dropdown;
  