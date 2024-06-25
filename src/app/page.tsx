import FeaturedCourses from "./components/FeaturedCourses";
import Footer from "./components/Fotter";
import HeroSection from "./components/HeroSection";
import Instructer from "./components/Instructure";
import TestimonialCard from "./components/TestimoinalCards";
import WhyChooseUs from "./components/WhyChoooseUs";




export default function Home() {
  return (
    <main className="main-h-screen bg-black/[0.96] antialiased 
    bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCard/>
      <Instructer/>
      <Footer/>
    </main>
  );
}
