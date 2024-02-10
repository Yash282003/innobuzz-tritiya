import Navbar from "../Navbar/Navbar";
import Details from "../Details/Details";
// import CategoriesDetail from "../Details/Details";
import Contactus from "../ContactUS/Contactus";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Register from "../Registration/Register"
import Goals from "../Goals/Goals";
import { Routes, Route } from "react-router-dom";
import Partners from "../Partners/Partners";

function Home() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <About />
              <Details />
              <Goals/>
              <Partners/>
              <Contactus/>
              <Footer />

            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Navbar />
              <Register/>
            </>
          }
        />
        {/* <Route
          path="/categories/:id"
          element={
            <>
              <Navbar />
              <CategoriesDetail />
            </>
          }
        /> */}
      </Routes>
    </>
  );
}

export default Home;
