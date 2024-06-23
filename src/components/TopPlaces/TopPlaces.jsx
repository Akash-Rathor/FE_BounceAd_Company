import { Link } from "react-router-dom"

const locData = [
  {
    name: "Devid Heilo",
    text: "How are you?",
    time: 12,
    textCount: 2503,
    color: "#10B981"
  },
  {
    name: "Henry Fisher",
    text: "Waiting for you!",
    time: 12,
    textCount: 12000,
    color: "#DC3545"
  },
  {
    name: "Jhon Doe",
    text: "What's up?",
    time: 32,
    textCount: 1000,
    color: "#10B981"
  },
  {
    name: "Jane Doe",
    text: "Great",
    time: 32,
    textCount: 14000,
    color: "#FFBA00"
  },
  {
    name: "Jhon Doe",
    text: "How are you?",
    time: 32,
    textCount: 28000,
    color: "#10B981"
  },
]

const TopPlaces = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4 w-2/5">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
        Top 5 Locations
      </h4>

      <div>
        {locData.map((loc, key) => (
          // <Link
          //   to="/"
          //   className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
          //   key={key}
          // >
          <div className="flex items-center gap-5 py-1 px-7.5">
            {/* <div className="relative h-14 w-14 rounded-full"> */}
              {/* <img src={loc.avatar} alt="User" /> */}
              {/* <span
                className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white"
                style={{ backgroundColor: loc.color }}
              ></span> */}
            {/* </div> */}

            <div className="flex flex-1 items-center justify-start border py-2 border-gray-2 rounded-xl shadow-md hover:bg-gray-3 dark:hover:bg-meta-4">
              <div>
                <h5 className=" text-xl text-warning font-medium text-black dark:text-white ml-5">
                  {loc.name}
                </h5>
                <p>
                  <span className="text-lg text-black dark:text-white ml-5">
                    {/* {loc.text} */}
                    Total Number of appearance : 
                  </span>
                  <span className="text-lg text-success font-medium"> {loc.textCount}</span>
                  {/* <span className="text-xs"> . {loc.time} min</span> */}
                </p>
              </div>
              {/* {loc.textCount !== 0 && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <span className="text-sm font-medium text-white">
                    {" "}
                    {loc.textCount}
                  </span>
                </div>
              )} */}
            </div>
          {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopPlaces
