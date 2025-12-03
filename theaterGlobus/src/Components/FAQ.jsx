// src/components/FAQ.jsx
import React from "react";

const FAQ = () => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
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
                        id="faq-title"
                        className="mbr-section-title mbr-fonts-style display-2 fw-bold"
                      >
                        რაიმე კითხვები?
                      </h2>

                      <h3 className="mbr-section-subtitle mbr-fonts-style display-2 fw-bold">
                        ჩვენ გვაქვს პასუხები
                      </h3>
                    </hgroup>
                  </div>
                </div>

                {/* ACCORDION */}
                <div
                  className="panel-group accordionStyles accordion"
                  id="faqAccordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  {/* FAQ ITEM TEMPLATE */}
                  {[
                    {
                      id: 1,
                      question: "როგორია დრეს-კოდი?",
                      answer: "რაც გაგიხარდებათ და რაშიც კომფორტულად იქნებათ.",
                    },
                    {
                      id: 2,
                      question: "საჭმლის მოტანა შეიძლება?",
                      answer:
                        "არა, მაგრამ ყურებისას საჭმელზე არც იფიქრებთ.",
                    },
                    {
                      id: 3,
                      question: "რა დროებში ხართ ღია?",
                      answer: "18:00–21:00 ღია ვართ.",
                    },
                    {
                      id: 4,
                      question: "თანხის უკან დაბრუნება შესაძლებელია?",
                      answer:
                        "დიახ, მაგრამ მხოლოდ იმ შემთხვევაში თუ ბილეთიც დაბრუნდება.",
                    },
                    {
                      id: 5,
                      question: "შემიძლია ფოტოების გადაღება?",
                      answer: "დიახ, მაგრამ ფლეშ ლაითის გარეშე.",
                    },
                    {
                      id: 6,
                      question: "რა ხდება თუ დავაგვიანე?",
                      answer: "შეძლებისდაგვარად წყნარად შეგიშვებთ.",
                    },
                  ].map(({ id, question, answer }) => (
                    <article key={id} className="card little-radius">
                      <header
                        className="card-header"
                        id={`heading${id}`}
                        role="tab"
                      >
                        <button
                          className="panel-title collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${id}`}
                          aria-expanded="false"
                          aria-controls={`collapse${id}`}
                        >
                          <span className="panel-title-edit mbr-fonts-style display-4 fw-bold">
                            {question}
                          </span>

                          <span className="sign mbr-iconfont mobi-mbri-arrow-down mobi-mbri"></span>
                        </button>
                      </header>

                      <div
                        id={`collapse${id}`}
                        className="panel-collapse collapse noScroll"
                        role="tabpanel"
                        aria-labelledby={`heading${id}`}
                        data-bs-parent="#faqAccordion"
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

export default FAQ;
