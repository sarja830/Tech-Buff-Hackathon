import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../config/dev";

const Jobs = ({setTab}) => {
  const [jobs, setJobs] = useState([]);

  const jobApplyHandler = () => {
    alert("Job applied successfully");
  }

  useEffect(() => {
  axios.get(`${SERVER_URL}/employee/get_jobs`, {headers: {
    Authorization: `Token ${localStorage.getItem("token")}`
  }}).then((response) => {
    console.log(response.data);
    setJobs(response.data);
  }).catch((error) => {
    alert(error);
  });
}, []);

  return (
    <>
    <div className="flex flex-col">
      <h1 className="mb-6 text-2xl text-center mt-4"><strong>Your job feed personalized to your preferences</strong></h1>
      <button onClick={() => (setTab("profile"))} className="underline text-blue-600">Update your profile for more job recommendations</button>
    </div>
    {jobs.length>0 ? 
    jobs.map((job) => (<div className="relative flex flex-col items-center justify-center overflow-hidden sm:py-12">
      <div className="bg-white  shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md">
        <div>
          {/* <span className="text-purple-800 text-sm">Engineering</span> */}
          <h3 className="font-bold mt-px">{job.headline}</h3>
          <div className="flex items-center gap-3 mt-2">
            <span className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">
              Full-time
            </span>
            <span className="text-slate-600 text-sm flex gap-1 items-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>{" "}
              Remote, Buffalo, NY
            </span>
          </div>
        </div>
        <div>
          <button className="bg-purple-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center"
          onClick={jobApplyHandler}>
            Apply Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>)) :
    <div className="mt-10 px-10">
      <p>Sorry, 0 matching jobs found!</p>
      <p>Try updating your profile for more recommendations.</p>
      </div>}
    </>
  );
};

export default Jobs;
