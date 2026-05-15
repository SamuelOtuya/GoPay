import Hero from "../components/home/Hero";
import EntryPoints from "../components/home/EntryPoints";
// import Categories from "../components/home/Categories";
// import RiskSection from "../components/home/RiskSection";
import WhyUs from "../components/home/WhyUs";
import CTA from "../components/home/CTA";
import Partners from "../components/home/Partners";
import Blog from "./Blog";
import HBlog from "../components/home/hblog";

function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <Partners />
      <EntryPoints />
      <HBlog />
      {/* <Categories /> */}
      {/* <RiskSection />s */}
      <WhyUs />
      <CTA />
    </div>
  );
}

export default Home;
