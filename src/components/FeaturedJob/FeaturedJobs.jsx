import { useEffect, useState } from "react";

function FeaturedJobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <h1>Featured Jobs {jobs.length}</h1>
    </div>
  );
}

export default FeaturedJobs;
