// WithLoader.jsx
import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import Loader from "./Loader";

const WithLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  // const location = useLocation();
  // const history = useHistory();

  useEffect(() => {
    // Set loading to true when the route changes
    setLoading(true);

    // Simulate an asynchronous operation (e.g., fetching data)
    const fakeAsyncOperation = () => {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    };

    // Execute the fake async operation
    fakeAsyncOperation();
  }, []); // to trigger when the pathname changes add [location.pathname]

  return loading ? <Loader /> : children;
};

export default WithLoader;
