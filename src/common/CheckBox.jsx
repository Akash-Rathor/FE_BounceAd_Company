import React from 'react';

const CheckBox = ({ title, isChecked, onCheckboxChange }) => {
  return (
    <div>
      <label
        htmlFor={`checkboxLabel${title}`}
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id={`checkboxLabel${title}`}
            className="sr-only"
            checked={isChecked}
            onChange={onCheckboxChange}
          />
          <div
            className={`mr-4  flex h-5 w-5 items-center justify-center rounded border ${
              isChecked && 'border-primary bg-gray dark:bg-transparent'
            }`}
          >
            <span
              className={`h-2.5 w-2.5 text-green-800rounded-sm ${isChecked && 'bg-success'}`}
            ></span>
          </div>
        </div>
        <p className='text-green-800'>
          {title}
          </p>
      </label>
    </div>
  );
};

export default CheckBox;
