// src/components/ContactInfoEN.jsx
import React from "react";

const ContactInfoEN = () => {
  return (
    <section
      id="contact-info"
      aria-label="Contact information"
      className="contacts01 strengthm5 cid-v20nubevk7"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">

            {/* Section Label */}
            <p className="mbr-label mbr-fonts-style display-7 fw-bold">
              Visit Us
            </p>

            <div className="items-wrapper">

              {/* PHONE NUMBERS */}
              <article
                className="item features-without-image"
                aria-label="Phone numbers"
              >
                <div className="item-wrapper">
                  <h4 className="card-title mbr-fonts-style display-5 fw-bold">
                    Call Us
                  </h4>

                  <address className="card-text mbr-fonts-style display-5">
                    <strong>
                      Irakli —{" "}
                      <a href="tel:+995555559083">📞 555-55-90-83</a> <br />
                      Koba —{" "}
                      <a href="tel:+995599422405">📞 599-42-24-05</a> <br />
                      Taso —{" "}
                      <a href="tel:+995511410521">📞 511-41-05-21</a>
                    </strong>
                  </address>
                </div>
              </article>

              {/* ADDRESS */}
              <article
                className="item features-without-image"
                aria-label="Address"
              >
                <div className="item-wrapper">
                  <h4 className="card-title mbr-fonts-style display-5 fw-bold">
                    Address
                  </h4>
                  <p className="card-text mbr-fonts-style display-5">
                    <strong>
                      106 Aghmashenebeli Ave — Culture Center “Imedi”
                    </strong>
                  </p>
                </div>
              </article>

              {/* EMAIL */}
              <article
                className="item features-without-image"
                aria-label="Email contact"
              >
                <div className="item-wrapper">
                  <h4 className="card-title mbr-fonts-style display-5 fw-bold">
                    Email Us
                  </h4>
                  <p className="card-text mbr-fonts-style display-5">
                    <strong>
                      <a href="mailto:ნონო@theaterglobus.com">
                        theaterglobus2025@gmail.com
                      </a>
                    </strong>
                  </p>
                </div>
              </article>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoEN;
