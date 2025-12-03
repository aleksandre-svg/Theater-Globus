// src/components/ContactForm.jsx
import React, { useState, useCallback } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState(null); // success | error | sending

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    if (status === "sending") return; // Prevent double submits
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
          headers: {
            "Content-Type": "application/json", // Best practice
          },
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
                დაგვიკავშირდით
              </p>

              <h2 className="mbr-section-title mbr-fonts-style display-5 fw-bold">
                ნებისმიერი კითხვის შემთხვევაში, მოგვწერეთ
              </h2>

              {/* Accessible live region for messages */}
              <div aria-live="polite" className="visually-hidden">
                {status === "success" && "შეტყობინება გაიგზავნა!"}
                {status === "error" && "დაფიქსირდა შეცდომა."}
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
                      სახელი
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-control display-7"
                      placeholder="სახელი"
                      required
                      autoComplete="name"
                      name="name"
                    />
                  </div>

                  {/* Phone */}
                  <div className="col-lg-6 col-md-12 form-group mb-3">
                    <label htmlFor="number" className="fw-semibold">
                      ტელეფონის ნომერი
                    </label>
                    <input
                      id="number"
                      type="tel"
                      className="form-control display-7"
                      placeholder="ტელეფონის ნომერი"
                      required
                      autoComplete="tel"
                      name="number"
                    />
                  </div>

                  {/* Message */}
                  <div className="col-12 form-group mb-3">
                    <label htmlFor="message" className="fw-semibold">
                      შეტყობინება
                    </label>
                    <textarea
                      id="message"
                      className="form-control display-7"
                      placeholder="შეტყობინება"
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
                    >
                      {status === "sending" ? "იგზავნება..." : "გაგზავნა"}
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

export default ContactForm;
