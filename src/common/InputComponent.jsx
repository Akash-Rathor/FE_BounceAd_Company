import React, { useState, useEffect } from 'react';

const InputComponent = ({ getUpdatedValue, placeholder, Icon, editable = true }) => {
    const [val, setVal] = useState('');

    const valueChange = (event) => {
        setVal(event.target.value);
        getUpdatedValue(event.target.value);
    };

    // useEffect(() => {
    //     console.log('editable', editable);
    //     if (!editable) {
    //         setVal(0.25);
    //         getUpdatedValue(0.25);
    //     } else {
    //         setVal('');
    //     }
    // }, [editable,getUpdatedValue]);

    return (
        <div className="relative w-full">
            {Icon && <span className="absolute left-5 top-3 opacity-10">
                {Icon}
            </span>}
            <input
                className={`w-full min-w-44 rounded border border-stroke ${editable ? 'bg-slate-100 text-black' : 'bg-slate-500 text-white'} py-3 ${Icon ? 'pl-12' : 'pl-2'} 
                            pr-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                type="text"
                name="fullName"
                id="fullName"
                placeholder={placeholder}
                value={val}
                onChange={valueChange}
                disabled={!editable}
            />
        </div>
    );
};

export default InputComponent;
