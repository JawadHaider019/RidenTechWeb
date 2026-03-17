// app/about/page.jsx
"use client";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import CEOMessage from "@/components/CEOMessage";
import Team from '@/components/Team'
import Technologies from "@/components/Technologies";
// import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section for About */}
      <HeroSection
        title="ABOUT US"
        subtitle="Innovating technology solutions that help businesses grow faster, operate smarter, and stay ahead in a competitive digital landscape."
        primaryCta={{ text: "Meet the Team", href: "/team" }}
      />

      <AboutUs />
      {/* <CEOMessage /> */}
      {/* <Team/> */}
      <Technologies />
      {/* <Testimonials/> */}
      <Blog />
    </main>
  );
}