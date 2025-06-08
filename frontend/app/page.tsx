import About from "./components/about";
import BeautyServices from "./components/beauty-services";
import CallToAction from "./components/call-to-action";
import Gallery from "./components/gallery";
import HairCareServices from "./components/hair-care-services";
import Hero from "./components/hero";
import KidsServices from "./components/kids-services";
import MenServices from "./components/men-services";
import ServicesOverview from "./components/services-overview";
import WhyChooseUs from "./components/why-choose-us";
import WomenServices from "./components/women-services";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <WhyChooseUs />
      <ServicesOverview />
      <MenServices />
      <WomenServices />
      <KidsServices />
      <HairCareServices />
      <BeautyServices />
      <Gallery />
      <CallToAction />
    </div>
  );
}
