import React, { useState, useEffect } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const SignUp = (e) => {
    e.preventDefault();

    let data = { name, email, password };

    let config = {
      method: "post",
      url: "http://localhost:8000/users",
      headers: { "Content-Type": "application/json" },
      data: data,
    };

    axios(config)
      .then((res) => {
        window.location.href = "/login";
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  return (
    <div
      className="signup d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <form className="card p-3" style={{ width: 400 }} onSubmit={SignUp}>
        <h4 className="mb-4 text-center">Create an account.</h4>
        {error && <p className="form-text text-danger">{error}</p>}
        <div className="mb-3">
          <label for="exampleInputName1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p>
          Already have an account?{" "}
          <span
            className="fw-bold text-primary"
            type="button"
            onClick={() => window.location.replace("/login")}
          >
            Login
          </span>
        </p>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
