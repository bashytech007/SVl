import { createContext, useState } from "react";
import { APP_URLS, AUTH_DEFAULT_STATE } from "../constants";
import { LOCAL_STORAGE_KEYS } from "../constants/storageKeys";
import { axios } from "../library";

type AuthType = {
  access: () => string | null;
};

type AuthContextType = {
  auth: AuthType;
  setAuth: React.Dispatch<React.SetStateAction<typeof AUTH_DEFAULT_STATE>>;
  logout: () => void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authValue, setAuthValue] = useState(AUTH_DEFAULT_STATE);

  const authContextState = {
    access: () =>
      authValue.access || localStorage.getItem(LOCAL_STORAGE_KEYS.access_token),
  };

  const logout = async () => {
    setAuthValue(AUTH_DEFAULT_STATE);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.access_token);
    await axios.post(APP_URLS.auth.logout);
  };

  return (
    <AuthContext.Provider
      value={{ auth: authContextState, setAuth: setAuthValue, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
