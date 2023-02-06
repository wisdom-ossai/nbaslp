import React from "react";
import styles from "../styles/SigninModal.module.css";

const SigninModal = () => {
  return (
    <div
      className="modal fade"
      id="login-modal"
      tabIndex={1}
      role="dialog"
      data-bs-backdrop="static"
      aria-labelledby="signinModal"
      aria-hidden="true"
      style={{ display: "none" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className={styles["loginmodal-container"]}>
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <h1>Login to Your Account</h1>
          <br />

          <form>
            <input type="text" name="user" placeholder="Username" />
            <input type="password" name="pass" placeholder="Password" />
            <input
              type="submit"
              name="login"
              className={`${styles["login"]} ${styles["loginmodal-submit"]}`}
              value="Login"
            />
          </form>

          <div className={styles["login-help"]}>
            <a href="#">Join</a> - <a href="#">Forgot Password</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninModal;
