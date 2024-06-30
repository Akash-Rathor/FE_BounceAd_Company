import React from 'react'

const InputComponent = ({ getUpdatedValue , placeholder,Icon}) => {

    const valueChange = (event) => {
        getUpdatedValue(event.target.value)
    }
    return (
    <div className="relative w-full">
        <span className="absolute left-5 top-3">
            {Icon}
        </span>
        <input
                className="w-full rounded border border-stroke bg-gray py-3 pl-12 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                type="text"
                name="fullName"
                id="fullName"
                placeholder={placeholder}
                defaultValue=""
                onChange={valueChange}
            />
    </div>
    )
}

export default InputComponent;