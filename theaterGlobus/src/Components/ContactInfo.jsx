// src/components/ContactInfo.jsx
import React from "react";

const ContactInfo = () => {
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
                    დაგვირეკეთ
                  </h4>

                  <address className="card-text mbr-fonts-style display-5">
                    <strong>
                      ირაკლი —{" "}
                      <a href="tel:+995555559083">📞 555-55-90-83</a> <br />
                      კობა —{" "}
                      <a href="tel:+995599422405">📞 599-42-24-05</a> <br />
                      ტასო —{" "}
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
                    მისამართი
                  </h4>
                  <p className="card-text mbr-fonts-style display-5">
                    <strong>აღმაშენებლის 106 — კულტურის ცენტრი „იმედი“</strong>
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
                    მოგვწერეთ იმეილზე
                  </h4>
                  <p className="card-text mbr-fonts-style display-5">
                    <strong>
                      <a href="mailto:ნონო@theaterglobus.com">
                        theaterglobus2025@gmail.com
                      </a>
                    </strong>
                  </p>
                </div>
                {/* SOCIAL  */}
              </article>
              <article
                className="item features-without-image"
                aria-label="Email contact"
              >
                <div className="item-wrapper">
                  <h4 className="card-title mbr-fonts-style display-5 fw-bold">
                    ეწვიეთ ჩვენს სოციალურ ქსელებს
                  </h4>
                  <br />
                  <p className="card-text mbr-fonts-style display-5">
                    <strong>
                      <a href="https://www.facebook.com/groups/1493684781741363">
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                      <a href="https://www.tiktok.com/@teatriglobusi?_r=1&_t=ZS-91hYCfcPOsc">
                        <i className="fa-brands fa-tiktok"></i>
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
