import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const apiUri = process.env.NEXT_PUBLIC_API_URI;
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(token);
    }
  }, [token]);

  const verifyToken = async () => {
    try {
      const tokenVerify = await axios.get(`${apiUri}/api/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("token is valid", tokenVerify.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      verifyToken();
    }
  }, [token]);

  return (
    <GlobalContext.Provider
      value={{ token, setToken, verifyToken }}></GlobalContext.Provider>
  );
};
export { GlobalContext, GlobalProvider };
