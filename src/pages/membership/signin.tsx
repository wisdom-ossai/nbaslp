import Link from "next/link";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../styles/Signin.module.css";
import Head from "next/head";
import { withPublic } from "@slp/configs/withAuth";

const Signin = ({ auth }: any) => {
  const { signIn, googleSignin } = auth;
  const [loading, setLoading] = useState(false);
  const [serverErrors, setServerError] = useState({ email: "", password: "" });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Password is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);

      const { result, error } = await signIn(values.email, values.password);

      if (error) {
        setLoading(false);
        setServerError(error);
        return;
      }

      // else successful
      console.log(result);
      setLoading(false);
      setServerError({ email: "", password: "" });
    },
  });

  const handleGoogle = async () => {
    const { result, error } = await googleSignin();

    if (error) {
      console.log("error", error);
      return;
    }

    return result;
  };
  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>
      <div className={`container ${styles.signin}`}>
        <div className="row justify-content-center align-items-center mt-5 w-100">
          <div className="col-lg-5 col-md-6 col-sm-6 m-auto">
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
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
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
                    <button
                      type="submit"
                      className="btn text-light btn-primary"
                      disabled={loading}
                    >
                      {loading ? "Signing in..." : "Login"}
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
                    onClick={() => handleGoogle()}
                  >
                    <i className="fab fa-google"></i>&nbsp;&nbsp; Signin with
                    Google
                  </button>
                </div>

                <div className="d-flex" style={{ fontSize: 12 }}>
                  Not a member yet? &nbsp;{" "}
                  <Link href="/membership/signup">Become a member</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withPublic(Signin);
