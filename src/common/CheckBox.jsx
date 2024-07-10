import React from 'react';

const CheckBox = ({ title, isChecked, onCheckboxChange ,disabled}) => {
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
            className={`sr-only`}
            checked={isChecked}
            onChange={onCheckboxChange}
            disabled={disabled}
          />
          <div
            className={`mr-4  flex h-5 w-5 items-center justify-center rounded border ${
              isChecked && 'border-primary bg-gray dark:bg-transparent'
            } ${disabled ? "text-black text-opacity-30" : null}` }
          >
            <span
              className={`h-2.5 w-2.5 text-blue-800 rounded-sm ${isChecked && 'bg-blue-800'}`}
            ></span>
          </div>
        </div>
        <p className={disabled ? "text-black text-opacity-50" : "text-blue-800 font-semibold"}>
          {title}
          </p>
      </label>
    </div>
  );
};

export default CheckBox;
