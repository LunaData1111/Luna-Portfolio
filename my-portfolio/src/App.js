import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import PortfolioPage from "./pages/portfolio";
import AboutMePage from "./pages/aboutMe";
import ResumePage from "./pages/resume";
import ContactForm from "./pages/contact";

function App() {
  return (
    <Layout>
     <Routes>
        <Route path="/" element={<AboutMePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Layout>
  );
}