// src/components/ContactInfo.jsx
import React from "react";

const ContactInfo = () => {
  return (
    <section
      id="contact-info"
      aria-labelledby="contact-info-title"
      className="contacts01 strengthm5 cid-v20nubevk7"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">

            {/* SECTION LABEL */}
            <p
              id="contact-info-title"
              className="mbr-label mbr-fonts-style display-7 fw-bold"
            >
              Visit Us
            </p>

            <div className="items-wrapper" role="list">

              {/* PHONE NUMBERS */}
              <article
                className="item features-without-image"
                role="listitem"
                aria-label="Phone contact information"
              >
                <div className="item-wrapper">
                  <h4 className="card-title mbr-fonts-style display-5 fw-bold">
                    დაგვირეკეთ
                  </h4>

                  <address className="card-text mbr-fonts-style display-5">
                    <strong>
                      ირაკლი —{" "}
                      <a href="tel:+995555559083" aria-label="Call Irakli at 555 55 90 83">
                        📞 555-55-90-83
                      </a>
                      <br />
                      კობა —{" "}
                      <a href="tel:+995599422405" aria-label="Call Koba at 599 42 24 05">
                        📞 599-42-24-05
                      </a>
                      <br />
                      ტასო —{" "}
                      <a href="tel:+995511410521" aria-label="Call Taso at 511 41 05 21">
                        📞 511-41-05-21
                      </a>
                    </strong>
                  </address>
                </div>
              </article>

              {/* ADDRESS */}
              <article
                className="item features-without-image"
                role="listitem"
                aria-label="Physical address"
              >
                <div className="item-wrapper">
                  <h4 className="card-title mbr-fonts-style display-5 fw-bold">
                    მისამართი
                  </h4>
                  <p className="card-text mbr-fonts-style display-5">
                    <strong>
                      აღმაშენებლის 106 — კულტურის ცენტრი „იმედი“
                    </strong>
                  </p>
                </div>
              </article>

              {/* EMAIL */}
              <article
                className="item features-without-image"
                role="listitem"
                aria-label="Email address"
              >
                <div className="item-wrapper">
                  <h4 className="card-title mbr-fonts-style display-5 fw-bold">
                    მოგვწერეთ იმეილზე
                  </h4>
                  <p className="card-text mbr-fonts-style display-5">
                    <strong>
                      <a
                        href="mailto:theaterglobus2025@gmail.com"
                        aria-label="Send email to theaterglobus2025@gmail.com"
                      >
                        theaterglobus2025@gmail.com
                      </a>
                    </strong>
                  </p>
                </div>
              </article>

              {/* SOCIAL */}
              <article
                className="item features-without-image"
                role="listitem"
                aria-label="Social media links"
              >
                <div className="item-wrapper">
                  <h4 className="card-title mbr-fonts-style display-5 fw-bold">
                    ეწვიეთ ჩვენს სოციალურ ქსელებს
                  </h4>

                  <p className="card-text mbr-fonts-style display-5 mt-2">
                    <strong>
                      <a
                        href="https://www.facebook.com/groups/1493684781741363"
                        aria-label="Visit our Facebook page"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </a>

                      <span className="mx-3"></span>

                      <a
                        href="https://www.tiktok.com/@teatriglobusi?_r=1&_t=ZS-91hYCfcPOsc"
                        aria-label="Visit our TikTok page"
                      >
                        <i className="fa-brands fa-tiktok"></i>
                      </a>

                      <span className="mx-3"></span>

                      <a
                        href="https://www.instagram.com/teatreglobusi/"
                        aria-label="Visit our TikTok page"
                      >
                        <i className="fa-brands fa-instagram"></i>
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

export default ContactInfo;
