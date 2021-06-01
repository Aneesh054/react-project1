export function Member2() {
  return (
    <div>
      <h1 className="d-flex justify-content-center">Login Module</h1>
      <div className="mb-2">
        <input type="text" name=""id=""placeholder="userName" className="form-control" />
      </div>
      <div className="mb-2">
        <input
          type="password"
          value=""
          placeholder="password"
          className="form-control"
        />
      </div>
      <div  className="bg-secondary d-flex justify-content-center">
        <input type="button" value="login" />
      </div>
    </div>
  );
}
