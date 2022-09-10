import { BrowserRouter } from "react-router-dom";
import Routers from "../routes/Routers";
import Header from "./Header";
import Footer from "./Footer";

import ProductViewModal from "../components/ProductViewModal";

function Layout() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <div className="main">
            <Routers />
          </div>
        </div>
        <Footer />
        <ProductViewModal />
      </div>
    </BrowserRouter>


  );
}

export default Layout;
