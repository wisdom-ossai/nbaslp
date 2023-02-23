import React from "react";
import { withProtected } from "@slp/configs/withAuth";
import Link from "next/link";

const Dashboard = ({ auth }: any) => {
  const { logout } = auth;

  return (
    <div>
      <button className="btn btn-secondary" onClick={() => logout()}>
        Logout
      </button>
      <Link
        href="/"
        // data-bs-toggle="modal"
        // data-bs-target="#login-modal"
        className="btn btn-primary py-2 px-4 ms-3"
      >
        Home
      </Link>
    </div>
  );
};

export default withProtected(Dashboard);
