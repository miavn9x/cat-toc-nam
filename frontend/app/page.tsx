import About from "../features/components/about";
import BeautyServices from "../features/components/beauty-services";
import CallToAction from "../features/components/call-to-action";
import Gallery from "../features/components/gallery";
import HairCareServices from "../features/components/hair-care-services";
import Hero from "../features/components/hero";
import KidsServices from "../features/components/kids-services";
import MenServices from "../features/components/men-services";
import ServicesOverview from "../features/components/services-overview";
import WhyChooseUs from "../features/components/why-choose-us";
import WomenServices from "../features/components/women-services";

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
