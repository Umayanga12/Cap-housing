import Navbar from "./components/navbar";
import Hero from "./home/hero";
import HousingModels from "./home/housing-models";
import HowItWorks from "./home/how-it-works";
import AboutUs from "./home/about-us";
import ContactUs from "./home/contact-us";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* <Hero /> */}
      <HousingModels />
      <HowItWorks />
      <AboutUs />
      <ContactUs />
      <Footer />
    </main>
  );
}
