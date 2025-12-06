// src/components/FAQEN.jsx
import React from "react";

const FAQEN = () => {
  const faqItems = [
    {
      id: 1,
      question: "What is the dress code?",
      answer: "Whatever you like and whatever feels comfortable."
    },
    {
      id: 2,
      question: "Can I bring food inside?",
      answer: "No, but during the show you won’t even think about food."
    },
    {
      id: 3,
      question: "What are your opening hours?",
      answer: "We are open from 18:00 to 21:00."
    },
    {
      id: 4,
      question: "Can I get a refund?",
      answer: "Yes, but only if the ticket is returned as well."
    },
    {
      id: 5,
      question: "Can I take photos?",
      answer: "Yes, but without flash."
    },
    {
      id: 6,
      question: "What happens if I am late?",
      answer: "We will let you in as quietly as possible."
    }
  ];

  return (
    <section
      id="faq"
      aria-labelledby="faq-title-en"
      className="list01 strengthm5 cid-v20nubdxu9"
    >
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">

            <div className="card-wrapper">

              {/* IMAGE */}
              <div className="image-wrapper">
                <img
                  src="/images/logo.jpg"
                  alt="Theater FAQ background"
                  loading="lazy"
                  width="800"
                  height="800"
                  className="little-radius"
                />
              </div>

              {/* HEADINGS */}
              <div className="content-wrapper">
                <div className="content-wrap">
                  <div className="title-wrapper">
                    <hgroup>
                      <h2
                        id="faq-title-en"
                        className="mbr-section-title mbr-fonts-style display-2 fw-bold mbr-section-title3"
                      >
                        Any Questions?
                      </h2>

                      <h3 className="mbr-section-subtitle mbr-fonts-style display-2 fw-bold mbr-section-title3">
                        We’ve Got the Answers
                      </h3>
                    </hgroup>
                  </div>
                </div>

                {/* ACCORDION */}
                <div
                  className="panel-group accordionStyles accordion"
                  id="faqAccordionEN"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  {faqItems.map(({ id, question, answer }) => (
                    <article key={id} className="card little-radius">
                      <header
                        className="card-header"
                        id={`headingEN${id}`}
                        role="tab"
                      >
                        <button
                          className="panel-title collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapseEN${id}`}
                          aria-expanded="false"
                          aria-controls={`collapseEN${id}`}
                        >
                          <span className="panel-title-edit mbr-fonts-style display-4 fw-bold">
                            {question}
                          </span>

                          <span className="sign mbr-iconfont mobi-mbri-arrow-down mobi-mbri"></span>
                        </button>
                      </header>

                      <div
                        id={`collapseEN${id}`}
                        className="panel-collapse collapse noScroll"
                        role="tabpanel"
                        aria-labelledby={`headingEN${id}`}
                        data-bs-parent="#faqAccordionEN"
                      >
                        <div className="panel-body">
                          <p className="panel-text mbr-fonts-style display-7">
                            {answer}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                {/* END ACCORDION */}

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQEN;
