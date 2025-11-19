// src/components/MapSectionEN.jsx
import React from "react";

const MapSectionEN = () => {
  return (
    <section
      id="location"
      aria-label="Theater Globus location map"
      className="map01 strengthm5 cid-v20nubdBes"
    >
      <div className="container">
        <div className="row justify-content-center">

          <div className="col-12">

            {/* Header Content */}
            <header className="content-wrapper">
              <p className="mbr-label mbr-fonts-style display-7 fw-bold">
                Our Address
              </p>

              <div className="title-wrapper">
                <h2 className="mbr-section-title mbr-fonts-style display-2 fw-bold">
                  Where the Magic Happens
                </h2>

                <h3 className="mbr-section-subtitle mbr-fonts-style display-2 fw-bold">
                  Visit Theater Globus
                </h3>
              </div>

              <p className="mbr-text mbr-fonts-style display-7">
                Come experience the thrill of live theater at our central
                location. We're easy to find, hard to forget.
              </p>
            </header>

            {/* Map */}
            <article
              className="google-map mt-4"
              aria-label="Google map showing Theater Globus location"
            >
              <iframe
                title="Theater Globus Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d626.1446974413324!2d44.79603299280169!3d41.71052877817947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d002cddefa7%3A0x939996ec3cb8bcdb!2z4YOZ4YOj4YOa4YOi4YOj4YOg4YOY4YOhIOGDquGDlOGDnOGDouGDoOGDmCAsLOGDmOGDm-GDlOGDk-GDmCI!5e0!3m2!1sen!2sge!4v1762980329004!5m2!1sen!2sge"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </article>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MapSectionEN;
