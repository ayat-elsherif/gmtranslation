import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "HomePage";
import WithLoader from "pageLoading/WithLoader";
import MainNavbar from "components/navbar/MainNavbar";
import AboutUs from "components/about/AboutUs";
import ContactUs from "components/contact/ContactUs";
import FooterSection from "components/footer/FooterSection";

function App() {
  return (
    <BrowserRouter>
      <WithLoader>
        <MainNavbar />
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <FooterSection />
      </WithLoader>
    </BrowserRouter>
  );
}

export default App;
