import { authSuccess } from "@/store/actions/auth.action";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

export const AuthProvider = ({ children }) => {
  const [fetched, setFetched] = useState(false);
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const apiUri = process.env.NEXT_PUBLIC_API_URI;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
      }
    }
  }, []);

  useEffect(() => {
    if (!token || !apiUri || fetched) return;

    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`${apiUri}/api/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userId = response.data.user.userId;

        const fetchUser = await axios.get(`${apiUri}/api/user/${userId}`);
        const userData = fetchUser.data;
        dispatch(authSuccess(userData.user));
        setFetched(true);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    };

    fetchUserInfo();
  }, [token, apiUri, fetched, dispatch]);

  return <>{children}</>;
};
