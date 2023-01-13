import React, { useEffect } from "react";
import { render } from "react-dom";
import { useParams } from "react-router";

const FakePage = () => {

  return (
  <div className="fakePage">
    <h1>Goodest Dog</h1>
    <h1>(or cat)</h1>
  </div>
  )
};

export default FakePage;