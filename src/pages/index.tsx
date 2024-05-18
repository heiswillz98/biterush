import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Hero2 from "@/components/Hero/Hero2";
import Navbar from "@/components/Navbar/Navbar";
import Restaurants from "@/components/Restaurants/Restaurants";
import React from "react";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hero2 />
      <Restaurants />
      <Footer />
    </div>
  );
};

export default Index;
