import React, { useEffect, useRef, useState } from "react";

// Handler hook for when outside click dropdown close
const useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  }, [handler]);

  return domNode;
};

const Dropdown = ({ title, dataset, selectFunction }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectValue, setSelect] = useState("");

  const domNode = useClickOutside(() => {
    setDropdownOpen(false);
  });

  const updateValue = (value) => {
    console.log('value',value)
    setSelect(value);
    selectFunction(value);
    setDropdownOpen(false);
  };

  useEffect(() => {
    setSelect('');
    selectFunction('');
    setDropdownOpen(false);
  },[title])

  return (
    <div ref={domNode} className="relative inline-block text-left">
      <button
        type="button"
        className="flex w-44 justify-evenly items-center origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none h-10"
        onClick={() => setDropdownOpen(prev => !prev)}
      >
        {selectValue ? `${title}-${selectValue}` : title}
        <svg
          className="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {dropdownOpen && (
        <div
          className="right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-40 overflow-hidden overflow-y-scroll"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {dataset.map((item, index) => (
              <DropdownItem
                key={index}
                label={item.value}
                onClick={() => updateValue(item.value)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

const DropdownItem = ({ label, onClick }) => {
  return (
    <span
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
      role="menuitem"
      onClick={onClick}
    >
      {label}
    </span>
  );
};