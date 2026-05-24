import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/home/HomeHero";
import ProjectDirectory from "@/components/home/ProjectDirectory";
import HomeAbout from "@/components/home/HomeAbout";
import HomeContact from "@/components/home/HomeContact";

export default function Home() {
  return (
    <>
      <Navbar />
        <HomeHero />
        <ProjectDirectory />
        <HomeAbout />
        <HomeContact />
      <Footer />
    </>
  );
}
