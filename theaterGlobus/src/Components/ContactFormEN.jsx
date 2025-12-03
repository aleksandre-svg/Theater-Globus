// src/components/ContactFormEN.jsx
import React, { useState, useCallback } from "react";

const ContactFormEN = () => {
  const [status, setStatus] = useState(null); // "sending" | "success" | "error"

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    if (status === "sending") return; // Prevent double-submit
    setStatus("sending");

    const form = e.target;

    const data = {
      name: form.name.value.trim(),
      number: form.number.value.trim(),
      message: form.message.value.trim(),
    };

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzMMKq67tnkOutKam3KNVhJm_ivQ0TbqaJ6dPZPlSLdnt-17ZaKVegLMBBDLvInnmiJ/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();

      if (result.status === "success") {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }, [status]);

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

              <p className="mbr-label mbr-fonts-style display-7 fw-bold">
                Contact Us
              </p>

              <h2 className="mbr-section-title mbr-fonts-style display-5 fw-bold">
                If you have any questions, feel free to write to us
              </h2>

              {/* Accessible live message region */}
              <div aria-live="polite" className="visually-hidden">
                {status === "success" && "Message sent successfully!"}
                {status === "error" && "Error sending message."}
              </div>

              <form
                className="mbr-form form-with-styler"
                onSubmit={handleSubmit}
                aria-label="Contact form"
              >
                <div className="dragArea row">

                  {/* Name */}
                  <div className="col-lg-6 col-md-12 form-group mb-3">
                    <label htmlFor="name" className="fw-semibold">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-control display-7"
                      placeholder="Name"
                      required
                      autoComplete="name"
                      name="name"
                    />
                  </div>

                  {/* Phone */}
                  <div className="col-lg-6 col-md-12 form-group mb-3">
                    <label htmlFor="number" className="fw-semibold">
                      Phone Number
                    </label>
                    <input
                      id="number"
                      type="tel"
                      className="form-control display-7"
                      placeholder="Phone Number"
                      required
                      autoComplete="tel"
                      name="number"
                    />
                  </div>

                  {/* Message */}
                  <div className="col-12 form-group mb-3">
                    <label htmlFor="message" className="fw-semibold">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="form-control display-7"
                      placeholder="Message"
                      rows="5"
                      required
                      name="message"
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <div className="col-md-auto mbr-section-btn">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn btn-primary display-7"
                      aria-label="Send message"
                    >
                      {status === "sending" ? "Sending..." : "Send"}
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
                width="100%"
                height="auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormEN;
