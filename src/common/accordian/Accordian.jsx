import React, { useState } from "react";

const Accordion = ({ children ,title,value=null,subType=false,error=false}) => {
  return (
    <section className="relative z-20 overflow-hidden bg-white dark:bg-dark py-2 px-2">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 h-auto">
            <AccordionItem title={title} value={value} subType={subType} error={error}>{children}</AccordionItem>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;

const AccordionItem = ({ title, value,subType,error,children }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (event) => {
    event.preventDefault();
    setActive(!active);
  };

  return (
    <div className={`w-full rounded-lg ${subType ? 'bg-slate-500 bg-opacity-10' : 'bg-white' } p-0 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] ${error ? 'ring-1 ring-red-600': null} `}>
      <button
        className="w-full flex items-center text-left p-4 bg-gray-100 dark:bg-gray-700"
        onClick={handleToggle}
      >
        <div className="flex-shrink-0 mr-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          <svg
            className={`fill-primary ${subType ? 'stroke-warning':'stroke-green-500'} duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>
        <div className="flex items-center w-full">
          <h1 className="font-bold">{title}</h1>
          </div>
        <div className="flex items-center w-full">
          <h1 className="font-normal">{value}</h1>
          </div>
      </button>

      <div
        className={`pl-4 pr-4 pb-4 duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
