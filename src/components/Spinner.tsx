import React from "react";

const Spinner = () => {
  return (
    <div className="w-100 h-100 d-flex align-items-center justify-content-center">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
