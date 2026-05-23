import { Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Personal from "./pages/Personal/Personal";
import PersonalType from "./pages/Personal/PersonalType";
import Appointment from "./pages/Appointment";
import Business from "./pages/business/Business";
import BusinessCategory from "./pages/business/BusinessCategory";
import Industry from "./pages/industry/Industry";
import IndustryDetail from "./pages/industry/IndustryDetail";
import Medical from "./pages/Personal/Medical";
import Product from "./pages/Product";
import Quote from "./pages/Quote";
import Risk from "./pages/risk/Risk";
import RiskDetail from "./pages/risk/RiskDetail";
import Blog from "./pages/Blog";
import Claim from "./pages/Claim";
import OurCovers from "./pages/OurCovers";
import TravelInsurance from "./pages/Personal/TravelInsurance";
import HomeInsurance from "./pages/Personal/HomeInsurance";
import SME from "./pages/business/SME";
import TestSupabase from "./pages/TestSuperbase";
import TestProduct from "./pages/TestProduct";
import InsuranceProductPage from "./pages/InsuranceProductPage";
import ProductsAdmin from "./admin/ProductsAdmin";
import ProductEdit from "./admin/ProductEdit";
import ProductCreate from "./admin/ProductCreate";
import { AdminAuthProvider } from "./admin/auth/AdminAuthContext";
import AdminLogin from "./admin/auth/AdminLogin";
import ProtectedAdminRoute from "./admin/auth/ProtectedAdminRoute";
import AppointmentsAdmin from "./admin/AppointmentsAdmin";

function App() {
  return (
    <DefaultLayout>
      <AppRoutes />
    </DefaultLayout>
  );
}

function AppRoutes() {
  return (
    <AdminAuthProvider>
      <Routes>
        {/* <Route element={<DefaultLayout />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/claim" element={<Claim />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/personal/:type" element={<PersonalType />} />
        <Route path="/personal/medical" element={<Medical />} />
        <Route path="/ourcovers" element={<OurCovers />} />
        <Route path="/personal/travel" element={<TravelInsurance />} />
        <Route path="/personal/home" element={<HomeInsurance />} />
        <Route path="/business/sme" element={<SME />} />
        <Route path="/test-supabase" element={<TestSupabase />} />
        <Route path="/test-product" element={<TestProduct />} />
        <Route path="/covers/:slug" element={<InsuranceProductPage />} />

        <Route path="/business" element={<Business />} />
        <Route path="/business/:category" element={<BusinessCategory />} />

        <Route path="/industry" element={<Industry />} />
        <Route path="/industry/:name" element={<IndustryDetail />} />

        <Route path="/risk" element={<Risk />} />
        <Route path="/risk/:type" element={<RiskDetail />} />

        <Route path="/product/:id" element={<Product />} />

        <Route path="/quote" element={<Quote />} />
        <Route path="/appointment" element={<Appointment />} />

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/products"
          element={
            <ProtectedAdminRoute>
              <ProductsAdmin />
            </ProtectedAdminRoute>
          }
        />

        <Route
          path="/admin/products/new"
          element={
            <ProtectedAdminRoute>
              <ProductCreate />
            </ProtectedAdminRoute>
          }
        />

        <Route
          path="/admin/products/:id/edit"
          element={
            <ProtectedAdminRoute>
              <ProductEdit />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/appointments"
          element={
            <ProtectedAdminRoute>
              <AppointmentsAdmin />
            </ProtectedAdminRoute>
          }
        />
        {/* </Route> */}
      </Routes>
    </AdminAuthProvider>
  );
}

export default App;
