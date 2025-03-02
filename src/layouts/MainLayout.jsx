import { Outlet } from "react-router";
import NavTop from "../components/NavTop";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import MySlider from "../components/mySlider";

const MainLayout = () => {
  return (
    <div className="font-Poppins bg-amber-200">
      <header>
        <NavTop />
       <NavBar/>
               
      </header>
      <Hero/>
      
       <main className="min-h-[calc(100vh-280px)] p-24 container mx-auto">
        <Outlet />
      </main>
      <footer className="">
        <Footer/>
      </footer>
    </div>
  );
};

export default MainLayout;
