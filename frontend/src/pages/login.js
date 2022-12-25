import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const LogIn = (e) => {
    e.preventDefault();

    let data = { email, password };

    let config = {
      method: "post",
      url: "http://localhost:8000/auth",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((res) => {
        window.location.href = "/";
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("user", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  return (
    <div
      className="login d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <form className="card p-3" style={{ width: 400 }} onSubmit={LogIn}>
        <h4 className="mb-4 text-center">Login to your account.</h4>
        {error && <p className="form-text text-danger">{error}</p>}
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
          Not have an account?{" "}
          <span
            className="fw-bold text-primary"
            type="button"
            onClick={() => window.location.replace("/signup")}
          >
            Signup
          </span>
        </p>
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
