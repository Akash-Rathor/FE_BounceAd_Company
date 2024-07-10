import React, { useEffect, useState } from 'react';
import CheckBox from '../../common/CheckBox';

const checkBoxData = [
  { value: 'Male' },
  { value: 'Female' },
  { value: 'Any' },
];

const Gender = ({ setGender }) => {
  const [selectedGenders, setSelectedGenders] = useState(checkBoxData.map(() => false));

  useEffect(() => {
    const selectedValues = checkBoxData
      .filter((_, i) => selectedGenders[i])
      .map(item => item.value)
      .join(', ');

    setGender(selectedValues);
  }, [selectedGenders, setGender]);

  const handleCheckboxChange = (index) => {
    const updatedGenders = [...selectedGenders];
    updatedGenders[index] = !updatedGenders[index];
    setSelectedGenders(updatedGenders);
  };

  return (
    <div className='flex flex-col space-y-2 justify-start items-start'>
      {checkBoxData.map((item, index) => (
        <CheckBox
          key={index}
          title={item.value}
          index={index}
          isChecked={selectedGenders[index]}
          onCheckboxChange={() => handleCheckboxChange(index)}
        />
      ))}
    </div>
  );
};

export default Gender;
