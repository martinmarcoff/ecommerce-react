import React from "react";
import "../styles/CreateAccount.scss";
import Header from "../components/Header";

const CreateAccount = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="CreateAccount">
        <div className="CreateAccount-container">
          <h1 className="title">My account</h1>
          <form action="/" className="form">
            <div>
              <label for="name" className="label">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Lionel Messi"
                className="input input-name"
              />
              <label for="email" className="label">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="lionelmessi@example.com"
                className="input input-email"
              />
              <label for="password" className="label">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="*********"
                className="input input-password"
              />
            </div>
            <input
              type="submit"
              value="Create"
              className="primary-button login-button"
            />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateAccount;
