// src/pages/ka/Home.jsx
import React, { Suspense, lazy } from "react";

// Lazy-load heavy sections to improve performance and SEO
const Navbar = lazy(() => import("../../Components/Navbar.jsx"));
const Hero = lazy(() => import("../../Components/Hero.jsx"));
const Features = lazy(() => import("../../Components/Features.jsx"));
const GalleryVideos = lazy(() => import("../../Components/GalleryVideos.jsx"));
const SliderImages = lazy(() => import("../../Components/SliderImages.jsx"));
const VideoSection = lazy(() => import("../../Components/VideoSection.jsx"));
const CTA = lazy(() => import("../../Components/CTA.jsx"));
const Team = lazy(() => import("../../Components/Team.jsx"));
const TabsSection = lazy(() => import("../../Components/TabsSection.jsx"));
const FAQ = lazy(() => import("../../Components/FAQ.jsx"));
const MapSection = lazy(() => import("../../Components/MapSection.jsx"));
const ContactForm = lazy(() => import("../../Components/ContactForm.jsx"));
const ContactInfo = lazy(() => import("../../Components/ContactInfo.jsx"));
const Footer = lazy(() => import("../../Components/Footer.jsx"));

const HomeKA = () => {
  return (
    <>
      <Navbar lang="ka" />
      <main id="main-content">

          {/* Hero Section — highest SEO weight */}
          <section aria-label="Hero section">
            <Hero />
          </section>

          {/* Features */}
          <section aria-label="Features section">
            <Features />
          </section>

          {/* Video Gallery */}
          <section aria-label="Gallery videos">
            <GalleryVideos />
          </section>

          {/* Image Slider */}
          <section aria-label="Image slider">
            <SliderImages />
          </section>

          {/* Promo Video */}
          <section aria-label="Main video section">
            <VideoSection />
          </section>

          {/* Call To Action */}
          <section aria-label="Call to action">
            <CTA />
          </section>

          {/* Team */}
          <section aria-label="Team members">
            <Team />
          </section>

          {/* Tabs */}
          <section aria-label="Tabs section">
            <TabsSection />
          </section>

          {/* FAQ */}
          <section aria-label="Frequently asked questions">
            <FAQ />
          </section>

          {/* Map */}
          <section aria-label="Location map">
            <MapSection />
          </section>

          {/* Contact form */}
          <section aria-label="Contact form">
            <ContactForm />
          </section>

          {/* Contact info */}
          <section aria-label="Contact information">
            <ContactInfo />
          </section>
        </main>
      <Footer lang="ka" />
    </>
  );
};

export default HomeKA;
