import React from "react"
import { Link } from "react-router-dom"

const locData = [
  {
    name: "Delhi",
    text: "How are you?",
    time: 12,
    textCount: 2503,
    color: "#10B981"
  },
  {
    name: "Noida",
    text: "Waiting for you!",
    time: 12,
    textCount: 12000,
    color: "#DC3545"
  },
  {
    name: "Gurgaon",
    text: "What's up?",
    time: 32,
    textCount: 1000,
    color: "#10B981"
  },
  {
    name: "Greater Noida",
    text: "Great",
    time: 32,
    textCount: 14000,
    color: "#FFBA00"
  },
  {
    name: "Gaziabad",
    text: "How are you?",
    time: 32,
    textCount: 28000,
    color: "#10B981"
  },
]

const TopPlaces = () => {
  return (
    <div className="col-span-12 rounded-3xl border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4 w-full lg:w-2/5">
      <h4 className="mb-6 px-4 lg:px-7.5 text-xl font-semibold text-black dark:text-white">
        Top 5 Locations
      </h4>

      <div>
        {locData.map((loc, key) => (
          // <Link
          //   to="/"
          //   className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
          //   key={key}
          // >
          <div className="flex items-center gap-5 py-3 px-4 lg:px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4" key={key}>
            <div className="flex flex-1 flex-row items-center justify-start border py-2 border-gray-2 rounded-xl shadow-md hover:bg-gray-3 dark:hover:bg-meta-4 w-full">
              <div className="flex flex-row justify-between items-center">
                <h5 className="text-lg lg:text-xl font-medium text-black dark:text-white ml-2 lg:ml-5">
                  {loc.name} : 
                </h5>
                <p>
                  {/* <span className="text-base lg:text-lg text-black dark:text-white ml-2 lg:ml-5">
                    Total Impressions:
                  </span> */}
                  <span className="text-base lg:text-lg text-success font-medium ml-1"> {loc.textCount}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopPlaces
