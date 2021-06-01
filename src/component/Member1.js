export function Member1() {
  return (
    <div>
      <h1 className="d-flex justify-content-center text-success ">User Registration</h1>
      <div className="mb-1">
        <input
          type="text"
          name=""
          placeholder="Enter UserName"
          className="form-control"
        />
      </div>
      <div className="mb-1">
        <input
          type="password"
          name=""
          placeholder="Enter password"
          className="form-control"
        />
      </div>
      <div className="mb-1">
        <input
          type="text"
          name=""
          placeholder="Enter Email"
          className="form-control"
        />
      </div>
      <div>
        <input type="button" value="Register" className="btn btn-secondary" />
      </div>
    </div>
  );
}
