// src/pages/en/Home.jsx
import React, { lazy } from "react";

const Navbar = lazy(() => import("../../Components/NavbarEN.jsx"));
const Hero = lazy(() => import("../../Components/HeroEN.jsx"));
const Features = lazy(() => import("../../Components/FeaturesEN.jsx"));
const GalleryVideos = lazy(() => import("../../Components/GalleryVideosEN.jsx"));
const SliderImages = lazy(() => import("../../Components/SliderImagesEN.jsx"));
const VideoSection = lazy(() => import("../../Components/VideoSectionEN.jsx"));
const CTA = lazy(() => import("../../Components/CTAEN.jsx"));
const Team = lazy(() => import("../../Components/TeamEN.jsx"));
const TabsSection = lazy(() => import("../../Components/TabsSectionEN.jsx"));
const FAQ = lazy(() => import("../../Components/FAQEN.jsx"));
const MapSection = lazy(() => import("../../Components/MapSectionEN.jsx"));
const ContactForm = lazy(() => import("../../Components/ContactFormEN.jsx"));
const ContactInfo = lazy(() => import("../../Components/ContactInfoEN.jsx"));
const Footer = lazy(() => import("../../Components/FooterEN.jsx"));

const HomeEN = () => {
  return (
    <>
      <Navbar lang="en" />
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
      <Footer />
    </>
  );
};

export default HomeEN;
