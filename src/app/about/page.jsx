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
        subtitle="We're a team of passionate creators dedicated to building exceptional digital experiences that drive real business growth."
        primaryCta={{ text: "Meet the Team", href: "/team" }}
        secondaryCta={{ text: "Our Story", href: "/story" }}
      />

      <AboutUs />
      <CEOMessage />
      {/* <Team/> */}
      <Technologies />
      {/* <Testimonials/> */}
      <Blog />
    </main>
  );
}