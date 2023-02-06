import Link from "next/link";
import React from "react";
import styles from "../styles/Signin.module.css";

const Signin = () => {
  return (
    <div className={`container ${styles.signin}`}>
      <div className="row justify-content-center mt-5 w-100">
        <div className="col-lg-5 col-md-6 col-sm-6">
          <div className="card shadow">
            <div
              className="card-title text-center border-bottom"
              style={{ position: "relative" }}
            >
              <Link
                href="/"
                className="d-flex align-items-center"
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "24px",
                  fontSize: 12,
                }}
              >
                <i className="fas fa-arrow-left"></i>&nbsp; Home
              </Link>
              <h2 className="p-3">Login</h2>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-4">
                  <label htmlFor="username" className="form-label">
                    Username/Email
                  </label>
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="remember"
                  />
                  &nbsp;
                  <label htmlFor="remember" className="form-label">
                    Remember Me
                  </label>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn text-light btn-primary">
                    Login
                  </button>
                </div>
                <div className="d-flex align-items-center justify-content-end mt-2">
                  <Link
                    href="/forgot-password text-secondary"
                    style={{ fontSize: 12 }}
                  >
                    Forgot Password
                  </Link>
                </div>
              </form>
              <hr />
              <div className="d-grid mb-2">
                <button
                  type="submit"
                  className={`btn text-light ${styles["btn-google"]}`}
                >
                  <i className="fab fa-google"></i>&nbsp;&nbsp; Signin with
                  Google
                </button>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className={`btn text-light ${styles["btn-facebook"]}`}
                >
                  <i className="fab fa-facebook-f"></i>&nbsp;&nbsp; Signin with
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
