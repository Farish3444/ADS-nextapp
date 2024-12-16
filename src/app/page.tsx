import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import Footer from "./components/Footer";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Card />
    <Footer />
    </>
  );
}
