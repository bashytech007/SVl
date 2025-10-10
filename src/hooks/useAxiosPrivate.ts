import { AxiosError } from "axios";
import { useEffect } from "react";
import { axiosPrivate } from "../library";
import useAuth from "./useAuth";
import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
  const { auth, setAuth, logout } = useAuth();
  const refresh = useRefreshToken();

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {
        config.headers = config.headers ?? {};

        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${
            auth?.access || localStorage.getItem("access")
          }`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        let prevRequest = error?.config;

        if (error?.response?.status === 401 && !prevRequest.hasSent) {
          prevRequest.hasSent = true;

          try {
            const {
              data: { access: newAccessToken },
            } = await refresh();
            setAuth((prev) => ({ ...prev, access: newAccessToken }));
            localStorage.setItem("access", newAccessToken);

            prevRequest = {
              ...prevRequest,
              headers: {
                ...prevRequest.headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            };

            return axiosPrivate(prevRequest);
          } catch (error) {
            if ((error as AxiosError)?.response?.status === 401) {
              console.log("Your session has expired. Please log in again"); //replace with toast

              logout();
            }
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [auth, setAuth, refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;
