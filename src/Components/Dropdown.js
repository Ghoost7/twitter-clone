
import React, { useState } from 'react';
import Link from 'next/link';

const ChoicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { value: 'option1', label: 'Option 1', link: '/lien-vers-option1' },
    { value: 'option2', label: 'Option 2', link: '/lien-vers-option2' },
   
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {selectedOption ? `Option sélectionnée : ${selectedOption}` : 'Choisissez une option'}
      </button>
      {isOpen && (
        <ul className="absolute mt-2 py-2 w-40 bg-white rounded-lg shadow-lg">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                setSelectedOption(option.value);
                setIsOpen(false);
              }}
              className="cursor-pointer hover:bg-gray-100 px-4 py-2"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
      {selectedOption && (
        <div className="mt-2">
          <Link href={options.find((option) => option.value === selectedOption).link}>
            <a className="text-blue-500">Aller vers cette option</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ChoicesDropdown;

