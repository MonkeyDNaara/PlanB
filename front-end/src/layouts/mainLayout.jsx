import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
