function Job({ job }) {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
  } = job;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={logo} width={100} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{job_description}</p>
        <div className="flex">
          <p>Salary {salary}</p>
          <p>Job type {job_type}</p>
        </div>

        <p>
          Location {remote_or_onsite} {location}
        </p>
        <p>Location {company_name}</p>

        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
}

export default Job;
