import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
        <div className="default-layout">
          {/* Your layout structure */}
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
