import axios from "axios";
import { APP_URLS } from "../constants";

const useRefreshToken = () => {
  const refresh = () =>
    axios.post(APP_URLS.auth.refresh_token, {}, { withCredentials: true });

  return refresh;
};

export default useRefreshToken;
