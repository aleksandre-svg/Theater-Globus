// src/components/ContactForm.jsx
import React from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submit logic here (EmailJS, backend, etc.)
  };

  return (
    <section
      id="contact"
      aria-label="Contact form section"
      className="form01 strengthm5 cid-v20nubeTjj"
    >
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">

          {/* FORM CARD */}
          <div className="col-12 col-lg-4 card">
            <div className="content-wrapper">

              {/* Section title */}
              <p className="mbr-label mbr-fonts-style display-7 fw-bold">
                დაგვიკავშირდით
              </p>

              <h2 className="mbr-section-title mbr-fonts-style display-5 fw-bold">
                ნებისმიერი კითხვის შემთხვევაში, მოგვწერეთ
              </h2>

              {/* Contact Form */}
              <form
                className="mbr-form form-with-styler"
                onSubmit={handleSubmit}
                aria-label="Contact form"
              >
                <div className="dragArea row">

                  {/* Name */}
                  <div className="col-lg-6 col-md-12 form-group mb-3">
                    <label htmlFor="name" className="visually-hidden">
                      სახელი
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-control display-7"
                      placeholder="სახელი"
                      required
                      aria-required="true"
                    />
                  </div>

                  {/* Email */}
                  <div className="col-lg-6 col-md-12 form-group mb-3">
                    <label htmlFor="email" className="visually-hidden">
                      ტელეფონის ნომერი:
                    </label>
                    <input
                      id="number"
                      type="number"
                      className="form-control display-7"
                      placeholder="ტელეფონის ნომერი"
                      required
                      aria-required="true"
                    />
                  </div>

                  {/* Message */}
                  <div className="col-12 form-group mb-3">
                    <label htmlFor="message" className="visually-hidden">
                      შეტყობინება
                    </label>
                    <textarea
                      id="message"
                      className="form-control display-7"
                      placeholder="შეტყობინება"
                      rows="5"
                      required
                      aria-required="true"
                    ></textarea>
                  </div>

                  {/* Submit button */}
                  <div className="col-md-auto mbr-section-btn">
                    <button
                      type="submit"
                      className="btn btn-primary display-7"
                      aria-label="გაგზავნა"
                    >
                      გაგზავნა
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* IMAGE */}
          <div className="col-12 col-lg-6 card">
            <div className="image-wrapper">
              <img
                src="/images/contact.png"
                alt="Contact us illustration"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;