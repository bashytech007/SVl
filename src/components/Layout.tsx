import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import ScrollToTop from "./ScrollToTop";

export const Layout = () => {
  return (
    <ScrollToTop>
      <div className="flex flex-col min-h-dvh">
        <div className="max-w-9xl mx-auto w-full px-4 md:px-28">
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </ScrollToTop>
  );
};
