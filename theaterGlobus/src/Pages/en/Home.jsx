// src/pages/en/Home.jsx
import React, { Suspense, lazy } from "react";

const Navbar = lazy(() => import("../../Components/NavbarEN"));
const Hero = lazy(() => import("../../Components/HeroEN"));
const Features = lazy(() => import("../../Components/FeaturesEN"));
const GalleryVideos = lazy(() => import("../../Components/GalleryVideosEN"));
const SliderImages = lazy(() => import("../../Components/SliderImagesEN"));
const VideoSection = lazy(() => import("../../Components/VideoSectionEN"));
const CTA = lazy(() => import("../../Components/CTAEN"));
const Team = lazy(() => import("../../Components/TeamEN"));
const TabsSection = lazy(() => import("../../Components/TabsSectionEN"));
const FAQ = lazy(() => import("../../Components/FAQEN"));
const MapSection = lazy(() => import("../../Components/MapSectionEN"));
const ContactForm = lazy(() => import("../../Components/ContactFormEN"));
const ContactInfo = lazy(() => import("../../Components/ContactInfoEN"));
const Footer = lazy(() => import("../../Components/FooterEN"));
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
