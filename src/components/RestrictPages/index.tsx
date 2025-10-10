// components/RestrictPages.tsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { APP_ROUTES } from "../../constants";
import { useAuth } from "../../hooks";

type RestrictPagesProps = {
  requireAuth?: boolean; // true = must be logged in, false = must be logged out
};

const RestrictPages = ({ requireAuth = true }: RestrictPagesProps) => {
  const { auth } = useAuth();
  const location = useLocation();

  const isLoggedIn = !!auth.access();

  if (requireAuth && !isLoggedIn) {
    return (
      <Navigate to={APP_ROUTES.login} state={{ from: location }} replace />
    );
  }

  if (!requireAuth && isLoggedIn) {
    return <Navigate to={APP_ROUTES.mail} replace />;
  }

  return <Outlet />;
};

export default RestrictPages;
