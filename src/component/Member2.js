export function Member2() {
  return (
    <div>
      <h1>Login Module</h1>
      <div className="form-control">
        <input type="text" value="" placeholder="userName" />
      </div>
      <div className="form-control">
        <input type="password" value="" placeholder="password" />
      </div>
      <div>
        <input type="button" value="login" className="bg-primary" />
      </div>
    </div>
  );
}
