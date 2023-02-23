import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import React from "react";
import SigninModal from "./SigninModal";

const NAV_ITEMS = [
  {
    slug: "home",
    label: "Home",
    url: "/",
  },
  {
    slug: "about",
    label: "About",
    url: "#",
    children: [
      {
        slug: "about-slp",
        label: "About NBA SPL",
        url: "/about/slp",
      },
      {
        slug: "about-partnership",
        label: "Partnership",
        url: "/about/partnership",
      },
      {
        slug: "about-persidency",
        label: "Chairman",
        url: "/about/presidency",
      },
      {
        slug: "about-committees",
        label: "Committees",
        url: "/about/committees",
      },
    ],
  },
  {
    slug: "events",
    label: "Events",
    url: "/events",
  },
  {
    slug: "news-resources",
    label: "News & Resources",
    url: "#",
    children: [
      {
        slug: "news-resources-news",
        label: "News",
        url: "/news-resources/news",
      },
      {
        slug: "news-resources-gallery",
        label: "Media Gallery",
        url: "/news-resources/gallery",
      },
      {
        slug: "news-resources-blog",
        label: "Blog",
        url: "/news-resources/blog",
      },
      {
        slug: "trainings",
        label: "Trainings",
        url: "/news-resources/trainings",
      },
    ],
  },
  {
    slug: "membership",
    label: "Membership",
    url: "#",
    children: [
      {
        slug: "membership-news",
        label: "Become a Member",
        url: "/membership/signup",
      },
      {
        slug: "membership-directory",
        label: "Membership Directory",
        url: "/membership/directory",
      },
    ],
  },
  {
    slug: "contact-us",
    label: "Contact Us",
    url: "/contact-us",
  },
];

const Navbar = ({ user }: any) => {
  const router = useRouter();
  return (
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
        <a href="index.html" className="navbar-brand p-0">
          <h4 className="m-0 d-flex align-items-center">
            <img
              src="/assets/img/slp_3.png"
              className="img-fluid"
              width={45}
              height={45}
              alt="slp-logo"
            />
            &nbsp;{" "}
            <div className="d-flex justify-content-center flex-column">
              <span className="nba" style={{ fontSize: 10 }}>
                NIGERIAN BAR ASSOCIATION <br />
              </span>
              <span className="spl" style={{ fontSize: 12 }}>
                Section on Legal Practic - SPL
              </span>
            </div>
          </h4>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            {NAV_ITEMS.map((item: any) =>
              item.children ? (
                <div key={item.slug} className="nav-item dropdown">
                  <Link
                    href="#"
                    className={`nav-link dropdown-toggle ${
                      router.pathname.includes(item.url) ? "active" : ""
                    }`}
                    data-bs-toggle="dropdown"
                  >
                    {item.label}
                  </Link>
                  <div
                    className="dropdown-menu m-0"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {item.children.map((child: any) => (
                      <Link
                        key={child.slug}
                        href={child.url}
                        className={`dropdown-item ${
                          router.pathname === child.url ? "active" : ""
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.slug}
                  href={item.url}
                  className={`nav-item nav-link ${
                    router.pathname === item.url ? "active" : ""
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
          <button
            type="button"
            className="btn text-primary ms-3"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <i className="fa fa-search"></i>
          </button>
          <Link
            href={user ? "/dashboard" : "/signin"}
            // data-bs-toggle="modal"
            // data-bs-target="#login-modal"
            className="btn btn-primary py-2 px-4 ms-3"
          >
            {user ? "Dashboard" : "Sign In"}
          </Link>
        </div>
      </nav>

      <div className="modal fade" id="searchModal" tabIndex={-1}>
        <div className="modal-dialog modal-fullscreen">
          <div
            className="modal-content"
            style={{ background: "rgba(9, 30, 62, .7)" }}
          >
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn bg-white btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex align-items-center justify-content-center">
              <div className="input-group" style={{ maxWidth: "600px" }}>
                <input
                  type="text"
                  className="form-control bg-transparent border-primary p-3"
                  placeholder="Type search keyword"
                />
                <button className="btn btn-primary px-4">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SigninModal />

      <Script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        crossOrigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
        crossOrigin="anonymous"
      />
      <Script src="/assets/scripts/wow/wow.min.js" />
      <Script src="/assets/scripts/easing/easing.min.js" />
      <Script src="/assets/scripts/waypoints/waypoints.min.js" />
      <Script src="/assets/scripts/counterup/counterup.min.js" />
      <Script src="/assets/scripts/owlcarousel/owl.carousel.min.js" />
    </div>
  );
};

export default Navbar;
