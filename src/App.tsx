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

function App() {
  return (
    <DefaultLayout>
      <AppRoutes />
    </DefaultLayout>
  );
}

function AppRoutes() {
  return (
    <Routes>
      {/* <Route element={<DefaultLayout />}> */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/personal/:type" element={<PersonalType />} />
      <Route path="/personal/medical" element={<Medical />} />

      <Route path="/business" element={<Business />} />
      <Route path="/business/:category" element={<BusinessCategory />} />

      <Route path="/industry" element={<Industry />} />
      <Route path="/industry/:name" element={<IndustryDetail />} />

      <Route path="/risk" element={<Risk />} />
      <Route path="/risk/:type" element={<RiskDetail />} />

      <Route path="/product/:id" element={<Product />} />

      <Route path="/quote" element={<Quote />} />
      <Route path="/appointment" element={<Appointment />} />
      {/* </Route> */}
    </Routes>
  );
}

export default App;
