import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import Male from "./pages/male";
import Female from "./pages/female";
import Sports from "./pages/sports";
import Release from "./pages/release";
import Childrens from "./pages/childrens";
import Offers from "./pages/offers";
import Footer from "./components/Footer";
import News from "./components/news";
import Product from "./pages/product";
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";
import ErrorPage from "./pages/error";
import ForgotPassword from "./pages/auth/forgot-password";
import ConfirmationCode from "./pages/auth/code-confirm";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderAndFooter = [
    "/signin",
    "/signup",
    "/forgot-password",
    "/code-confirm",
  ].includes(location.pathname);

  return (
    <>
      {!hideHeaderAndFooter && <News />}
      {!hideHeaderAndFooter && <Header />}
      {children}
      {!hideHeaderAndFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/release" element={<Release />} />
          <Route path="/home" element={<Home />} />
          <Route path="/male" element={<Male />} />
          <Route path="/female" element={<Female />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/childrens" element={<Childrens />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/product-details" element={<Product />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/code-confirm" element={<ConfirmationCode />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
