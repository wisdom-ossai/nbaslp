import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@slp/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>NBASLP | Home</title>
      </Head>
      <>
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="w-100"
                src="/assets/img/carousel-1.jpg"
                alt="Image"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Creative & Innovative
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Creative & Innovative Digital Solution
                  </h1>
                  <a
                    href="quote.html"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Free Quote
                  </a>
                  <a
                    href=""
                    className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="w-100"
                src="/assets/img/carousel-2.jpg"
                alt="Image"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Creative & Innovative
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Creative & Innovative Digital Solution
                  </h1>
                  <a
                    href="quote.html"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Free Quote
                  </a>
                  <a
                    href=""
                    className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container-fluid facts py-5 pt-lg-0">
          <div className="container py-5 pt-lg-0">
            <div className="row gx-0">
              <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                <div
                  className="bg-primary shadow d-flex align-items-center justify-content-center p-4"
                  style={{ height: "150px" }}
                >
                  <div
                    className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-users text-primary"></i>
                  </div>
                  <div className="ps-4">
                    <h5 className="text-white mb-0">Happy Clients</h5>
                    <h1 className="text-white mb-0" data-toggle="counter-up">
                      12345
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                <div
                  className="bg-light shadow d-flex align-items-center justify-content-center p-4"
                  style={{ height: "150px" }}
                >
                  <div
                    className="bg-primary d-flex align-items-center justify-content-center rounded mb-2"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-check text-white"></i>
                  </div>
                  <div className="ps-4">
                    <h5 className="text-primary mb-0">Projects Done</h5>
                    <h1 className="mb-0" data-toggle="counter-up">
                      12345
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                <div
                  className="bg-primary shadow d-flex align-items-center justify-content-center p-4"
                  style={{ height: "150px" }}
                >
                  <div
                    className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-award text-primary"></i>
                  </div>
                  <div className="ps-4">
                    <h5 className="text-white mb-0">Win Awards</h5>
                    <h1 className="text-white mb-0" data-toggle="counter-up">
                      12345
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container-fluid py-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-7">
                <div className="section-title position-relative pb-3 mb-5">
                  <h5 className="fw-bold text-primary text-uppercase">
                    About Us
                  </h5>
                  <h1 className="mb-0">
                    The Best IT Solution With 10 Years of Experience
                  </h1>
                </div>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                  tempor sit. Aliqu diam amet diam et eos labore. Clita erat
                  ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                  clita duo justo et tempor eirmod magna dolore erat amet
                </p>
                <div className="row g-0 mb-3">
                  <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                    <h5 className="mb-3">
                      <i className="fa fa-check text-primary me-3"></i>Award
                      Winning
                    </h5>
                    <h5 className="mb-3">
                      <i className="fa fa-check text-primary me-3"></i>
                      Professional Staff
                    </h5>
                  </div>
                  <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                    <h5 className="mb-3">
                      <i className="fa fa-check text-primary me-3"></i>24/7
                      Support
                    </h5>
                    <h5 className="mb-3">
                      <i className="fa fa-check text-primary me-3"></i>Fair
                      Prices
                    </h5>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center mb-4 wow fadeIn"
                  data-wow-delay="0.6s"
                >
                  <div
                    className="bg-primary d-flex align-items-center justify-content-center rounded"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-phone-alt text-white"></i>
                  </div>
                  <div className="ps-4">
                    <h5 className="mb-2">Call to ask any question</h5>
                    <h4 className="text-primary mb-0">+012 345 6789</h4>
                  </div>
                </div>
                <a
                  href="quote.html"
                  className="btn btn-primary py-3 px-5 mt-3 wow zoomIn"
                  data-wow-delay="0.9s"
                >
                  Request A Quote
                </a>
              </div>
              <div className="col-lg-5" style={{ minHeight: "500px" }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100 rounded wow zoomIn"
                    data-wow-delay="0.9s"
                    src="/assets/img/about.jpg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container-fluid py-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div
              className="section-title text-center position-relative pb-3 mb-5 mx-auto"
              style={{ minWidth: "600px" }}
            >
              <h5 className="fw-bold text-primary text-uppercase">
                Why Choose Us
              </h5>
              <h1 className="mb-0">
                We Are Here to Grow Your Business Exponentially
              </h1>
            </div>
            <div className="row g-5">
              <div className="col-lg-4">
                <div className="row g-5">
                  <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                    <div
                      className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i className="fa fa-cubes text-white"></i>
                    </div>
                    <h4>Best In Industry</h4>
                    <p className="mb-0">
                      Magna sea eos sit dolor, ipsum amet lorem diam dolor eos
                      et diam dolor
                    </p>
                  </div>
                  <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                    <div
                      className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i className="fa fa-award text-white"></i>
                    </div>
                    <h4>Award Winning</h4>
                    <p className="mb-0">
                      Magna sea eos sit dolor, ipsum amet lorem diam dolor eos
                      et diam dolor
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4  wow zoomIn"
                data-wow-delay="0.9s"
                style={{ minHeight: "350px" }}
              >
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100 rounded wow zoomIn"
                    data-wow-delay="0.1s"
                    src="/assets/img/feature.jpg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row g-5">
                  <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                    <div
                      className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i className="fa fa-users-cog text-white"></i>
                    </div>
                    <h4>Professional Staff</h4>
                    <p className="mb-0">
                      Magna sea eos sit dolor, ipsum amet lorem diam dolor eos
                      et diam dolor
                    </p>
                  </div>
                  <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                    <div
                      className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i className="fa fa-phone-alt text-white"></i>
                    </div>
                    <h4>24/7 Support</h4>
                    <p className="mb-0">
                      Magna sea eos sit dolor, ipsum amet lorem diam dolor eos
                      et diam dolor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
