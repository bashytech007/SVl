import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 | SVL Consulting LTD</title>
      </Helmet>

      <div className="text-center my-10">
        <h3 className="text-9xl font-bold">404</h3>
        <p className="text-2xl my-4">Page Not found</p>
      </div>
    </>
  );
};

export default NotFound;
