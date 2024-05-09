import { useEffect, useState } from "react";
import Job from "../Job/Job";

function FeaturedJobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <h1 className="text-center mb-24 text-3xl font-semibold">Featured Jobs</h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 items-center gap-6">
          {jobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedJobs;
