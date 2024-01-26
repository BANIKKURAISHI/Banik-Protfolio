const From = () => {
  return (
    <div className="">
      <div className="hero  ">
        <div className="flex-col ">
          <div className="card w-96  lg:w-[800px] ">
            <form className="card-body">
              <div className="flex flex-col lg:flex-row ">
                <div className="form-control w-full lg:mr-6 ">
                  <label className="label">
                    <span className="label-text text-white">Full Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="full name*"
                    className="input input-bordered 
           border-2  bg-inherit border-teal-400"
                    required
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email*"
                    className="input input-bordered border-2  bg-inherit border-teal-400"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Subject</span>
                </label>
                <input
                  type="password"
                  placeholder="subject*"
                  className="input input-bordered border-2  bg-inherit border-teal-400"
                  required
                />
              </div>
              <label className="label">
                <span className="label-text text-white">Message</span>
              </label>
              <textarea
                className="textarea textarea-info h-40 border-2  bg-inherit border-teal-400"
                placeholder="Enter your valuable message*"
              ></textarea>
              <div className="form-control mt-6">
                <button className="btn btn-primary border-2  bg-inherit border-teal-400">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default From;
