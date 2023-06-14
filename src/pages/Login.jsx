import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Log In</h2>
      <form className="form">
        <div className="input-group">
          <input type="email" placeholder="email" id="email" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-group">
          <input type="password" placeholder="password" id="password" />
          <label htmlFor="password">Password</label>
        </div>
        <button className="accent-btn">Log In</button>
      </form>
      <p>
        New here? <Link to={'/register'}>Register</Link>
      </p>
    </div>
  );
}

export default Login