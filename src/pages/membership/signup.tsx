import Link from "next/link";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../styles/Signin.module.css";
import Head from "next/head";
import { useAuthContext } from "@slp/components/AuthContext/AuthContext";
import { withPublic } from "@slp/configs/withAuth";

const Signup = ({ auth }: any) => {
  const { signUp } = auth;
  const [loading, setLoading] = useState(false);
  const [serverErrors, setServerError] = useState({
    email: "",
    password: "",
    username: "",
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .required("Password is required")
        .oneOf([Yup.ref("password")], "Your passwords do not match."),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      username: Yup.string().required("Username is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      const { result, error } = await signUp(
        values.email,
        values.password,
        values.username
      );

      if (error) {
        setLoading(false);
        setServerError(error);
        return;
      }

      // else successful
      console.log(result);
      setLoading(false);
      setServerError({ email: "", password: "", username: "" });
    },
  });
  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <div className={`container ${styles.signin}`}>
        <div className="row justify-content-center align-items-center m-auto h-100 w-100">
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
                <h2 className="p-3">Register</h2>
              </div>
              <div className="card-body">
                <form
                  onSubmit={formik.handleSubmit}
                  autoComplete="none"
                  autoCorrect="none"
                >
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      autoComplete="none"
                      autoCorrect="none"
                      type="text"
                      className={`form-control ${
                        formik.touched.username &&
                        (formik.errors.username || serverErrors.username)
                          ? "is-invalid"
                          : ""
                      }`}
                      id="username"
                      name="username"
                      onChange={formik.handleChange}
                      value={formik.values.username}
                    />
                    <div className="invalid-feedback">
                      {formik.errors.username || serverErrors.username}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      autoComplete="none"
                      autoCorrect="none"
                      type="text"
                      className={`form-control ${
                        formik.touched.email &&
                        (formik.errors.email || serverErrors.email)
                          ? "is-invalid"
                          : ""
                      }`}
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    <div className="invalid-feedback">
                      {formik.errors.email || serverErrors.email}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      autoComplete="none"
                      autoCorrect="none"
                      type="password"
                      className={`form-control ${
                        formik.touched.password &&
                        (formik.errors.password || serverErrors.password)
                          ? "is-invalid"
                          : ""
                      }`}
                      id="password"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    <div className="invalid-feedback">
                      {formik.errors.password || serverErrors.password}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      autoComplete="none"
                      autoCorrect="none"
                      type="password"
                      className={`form-control ${
                        formik.touched.confirmPassword &&
                        formik.errors.confirmPassword
                          ? "is-invalid"
                          : ""
                      }`}
                      id="confirmPassword"
                      name="confirmPassword"
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword}
                    />
                    <div className="invalid-feedback">
                      {formik.errors.confirmPassword}
                    </div>
                  </div>
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn text-light btn-primary"
                      disabled={loading}
                    >
                      {loading ? "Signing up..." : "Sign up"}
                    </button>
                  </div>
                </form>
                <hr />

                <div className="d-flex" style={{ fontSize: 12 }}>
                  Already a member? &nbsp;{" "}
                  <Link href="/membership/signin">Sign in</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withPublic(Signup);
