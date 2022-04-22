import React from "react";
import { Spinner } from "react-bootstrap";

const Spinners = () => {
  return (
    <div className="container text-center p-5">
      <div className="p-5 m-5">
        <Spinner animation="border" variant="danger" />
      </div>
    </div>
  );
};

export default Spinners;
