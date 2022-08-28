// EXTERNAL
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Footer from "components/footer";
import Header from "./components/header";
import { HomePage } from "pages/homePage";
import { ProductsPage } from "pages/productsListPage";
import { AdmPage } from "pages/admPage";


export default function AppRoutes(){
  return (
    <Router>

      <Header/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products">
          <Route index element={<ProductsPage />} />
          <Route path={":category"} element={<ProductsPage />} />
        </Route >
        <Route path="/admin" element={<AdmPage />} />
      </Routes>

      <Footer/>

    </Router>
  );
}