import React from "react";
import { useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";
function Loader() {
  let [loading, setLoading] = useState(true);

  return (
    <div className="mt-5">
      
        <div className="sweet-loading text-center">
        <center>
          <HashLoader
            color="#000"
            loading={loading}
            cssOverride=""
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          </center>
        </div>
      
    </div>
  );
}

export default Loader;
