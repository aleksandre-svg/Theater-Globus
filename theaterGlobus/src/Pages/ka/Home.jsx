// src/pages/ka/Home.jsx
import React, { Suspense, lazy } from "react";

// Lazy-load heavy sections to improve performance and SEO
const Navbar = lazy(() => import("../../components/Navbar"));
const Hero = lazy(() => import("../../components/Hero"));
const Features = lazy(() => import("../../components/Features"));
const GalleryVideos = lazy(() => import("../../components/GalleryVideos"));
const SliderImages = lazy(() => import("../../components/SliderImages"));
const VideoSection = lazy(() => import("../../components/VideoSection"));
const CTA = lazy(() => import("../../components/CTA"));
const Team = lazy(() => import("../../components/Team"));
const TabsSection = lazy(() => import("../../components/TabsSection"));
const FAQ = lazy(() => import("../../components/FAQ"));
const MapSection = lazy(() => import("../../components/MapSection"));
const ContactForm = lazy(() => import("../../components/ContactForm"));
const ContactInfo = lazy(() => import("../../components/ContactInfo"));
const Footer = lazy(() => import("../../components/Footer"));

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
