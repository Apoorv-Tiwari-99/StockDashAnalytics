import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.get("http://localhost:3002/", {
          withCredentials: true, // Send cookies with the request
        });
        if (data.status) {
          setIsAuthenticated(true); // User is authenticated
        } else {
          setIsAuthenticated(false); // User is not authenticated
        }
      } catch (error) {
        console.error("Authentication error:", error);
        setIsAuthenticated(false); // Default to unauthenticated
      }
    };

    verifyUser();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Optional loading state
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
