import React, { useEffect, useState } from "react"
import ReactApexChart from "react-apexcharts"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns';
import Loader from '../../common/Loader/index';

const options = {
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "bar",
    height: 335,
    stacked: true,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: "25%"
          }
        }
      }
    }
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: "25%",
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last"
    }
  },
  dataLabels: {
    enabled: false
  },

  xaxis: {
    categories: ["M", "T", "W", "T", "F", "S", "S"]
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Satoshi",
    fontWeight: 500,
    fontSize: "14px",

    markers: {
      radius: 99
    }
  },
  fill: {
    opacity: 1
  }
}

const ChartTwo = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isLoading,setIsLoading] = useState(false);

  const [state, setState] = useState({
    series: [
      // {
      //   name: "Sales",
      //   data: [44, 55, 41, 67, 22, 43, 65]
      // },
      {
        name: "impressions",
        data: [13, 23, 20, 8, 13, 27, 15]
      }
    ]
  })


  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() =>{
      setIsLoading(false);
    },1000)
    return () => clearTimeout(timer);
  },[endDate])

  const handleStartDateChange = (date) => {
    setStartDate(date);
    if (date > endDate || endDate > addDays(date, 7)) {
      setEndDate(null);
    }
  };

  const handleEndDateChange = (date) => {
    if (date <= addDays(startDate, 7)) {
      setEndDate(date);
    } else {
      alert('End date must be within 7 days of the start date.');
    }
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Impressions This week
          </h4>
        </div>
        {/* <div> */}
          <div className="inline-block space-y-2">
            <div className="flex flex-row space-x-2">

              <h2>Start Date : </h2>
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start Date"
                className="relative z-10 inline-flex appearance-none bg-white py-1 pl-3 text-sm font-semibold outline-none text-blue-800 border rounded-md"
              />
            </div>
            <div className="flex flex-row space-x-2">

              <h2>End  Date : </h2>
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="End Date "
                className="relative z-5 inline-flex appearance-none bg-white py-1 pl-3 text-sm font-semibold outline-none text-blue-800 border rounded-md"
              />
            </div>
          </div>
        {/* </div> */}
      </div>

      <div>
        <div id="chartTwo" className="-ml-5 -mb-9">
          {isLoading ? <Loader /> : 
          <ReactApexChart
            options={options}
            series={state.series}
            type="bar"
            height={350}
          />}
        </div>
      </div>
    </div>
  )
}

export default ChartTwo
