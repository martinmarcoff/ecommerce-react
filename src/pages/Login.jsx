import React, { useRef } from "react";
import "../styles/Login.scss";
import Header from "../components/Header";

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };

    console.log(data);
  };

  return (
    <React.Fragment>
      <Header />
      <div className="Login">
        <div className="Login-container">
          <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
          <h1 className="title">Login</h1>
          <form action="/" className="form" ref={form}>
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input
              type="text"
              name="email"
              placeholder="lionelmessi@example.com"
              className="input input-email"
            />
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="*********"
              className="input input-password"
            />
            <button
              className="primary-button login-button"
              onClick={handleSubmit}
            >
              Login
            </button>

            <a href="/">Forgot my password</a>
          </form>
          <button className="secondary-button signup-button">Sign up</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
