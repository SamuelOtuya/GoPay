import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import { FaWhatsapp } from "react-icons/fa";
import InsuranceBot from "../components/bot/InsuranceBot";
import ScrollToTop from "../components/shared/ScrollToTop";

// WhatsApp number
const whatsappNumber = "254715664233";
const whatsappMessage = encodeURIComponent(
  "Hello! I'm interested in your insurance services.",
);

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />
      <main className="flex-1">
        <Outlet />
        <div className="default-layout">
          {/* Your layout structure */}
          {children}
        </div>
      </main>
      <InsuranceBot />
      <Footer />

      <div>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center justify-center"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp size={30} />
        </a>
      </div>
    </div>
  );
};

export default DefaultLayout;
