import React, { useEffect, useState } from 'react';
import CheckBox from '../../common/CheckBox';

const checkBoxData = [
  { value: '15-24' },
  { value: '25-35' },
  { value: '36-45' },
  { value: '45+' },
];

const Age = ({ setAge }) => {
  const [selectedAge, setSelectedAge] = useState(checkBoxData.map(() => false));

  useEffect(() => {
    const selectedValues = checkBoxData
      .filter((_, i) => selectedAge[i])
      .map(item => item.value)
      .join(', ');

    setAge(selectedValues);
  }, [selectedAge, setAge]);

  const handleCheckboxChange = (index) => {
    const updatedAge = [...selectedAge];
    updatedAge[index] = !updatedAge[index];
    setSelectedAge(updatedAge);
  };

  return (
    <div className='flex flex-col space-y-2 justify-start items-start'>
      {checkBoxData.map((item, index) => (
        <CheckBox
          key={index}
          title={item.value}
          index={index}
          isChecked={selectedAge[index]}
          onCheckboxChange={() => handleCheckboxChange(index)}
        />
      ))}
    </div>
  );
};

export default Age;
