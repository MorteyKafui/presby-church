import AboutSection from "@/components/AboutSection";
import Aim from "@/components/Aim";
import Carousel from "@/components/Carousel";
import Leaders from "@/components/Leaders";
import Map from "@/components/Map";
import Ministries from "@/components/Ministries";

const Home = () => {
  return (
    <>
      <Carousel />
      <main className="max-w-6xl mx-auto px-10 container">
        <AboutSection />
      </main>
      <Leaders />
      <Aim />
      <Ministries />
      <Map />
    </>
  );
};

export default Home;
