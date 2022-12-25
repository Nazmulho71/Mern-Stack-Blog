import React from "react";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-white border">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Blogern
        </a>

        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary" type="submit">
            Search
          </button>
        </form>

        {localStorage.getItem("user") ? (
          <div class="dropdown">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Samir Hossain
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <button class="btn btn-outline-primary me-3" type="button">
              Login
            </button>
            <button class="btn btn-primary" type="button">
              Signup
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
