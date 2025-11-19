// src/components/FAQ.jsx
import React from "react";

const FAQ = () => {
  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
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
                  className="little-radius"
                />
              </div>

              {/* HEADINGS */}
              <div className="content-wrapper">
                <div className="content-wrap">
                  <div className="title-wrapper">
                    <h2 className="mbr-section-title mbr-fonts-style display-2 fw-bold">
                      რაიმე კითხვები?
                    </h2>
                    <h3 className="mbr-section-subtitle mbr-fonts-style display-2 fw-bold">
                      ჩვენ გვაქვს პასუხები
                    </h3>
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
                  {/* Each item below uses the same structure */}

                  {/* Q1 */}
                  <article className="card little-radius">
                    <header className="card-header" id="heading1" role="tab">
                      <button
                        className="panel-title collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse1"
                        aria-expanded="false"
                        aria-controls="collapse1"
                      >
                        <h4 className="panel-title-edit mbr-fonts-style display-4 fw-bold">
                          როგორია დრეს-კოდი?
                        </h4>
                        <span className="sign mbr-iconfont mobi-mbri-arrow-down mobi-mbri"></span>
                      </button>
                    </header>

                    <div
                      id="collapse1"
                      className="panel-collapse collapse noScroll"
                      role="tabpanel"
                      aria-labelledby="heading1"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="panel-body">
                        <p className="panel-text mbr-fonts-style display-7">
                          რაც გაგიხარდებათ და რაშიც კომფორტულად იქნებით.
                        </p>
                      </div>
                    </div>
                  </article>

                  {/* Q2 */}
                  <article className="card little-radius">
                    <header className="card-header" id="heading2" role="tab">
                      <button
                        className="panel-title collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2"
                        aria-expanded="false"
                        aria-controls="collapse2"
                      >
                        <h4 className="panel-title-edit mbr-fonts-style display-4 fw-bold">
                          საჭმლის მოტანა შეიძლება?
                        </h4>
                        <span className="sign mbr-iconfont mobi-mbri-arrow-down mobi-mbri"></span>
                      </button>
                    </header>

                    <div
                      id="collapse2"
                      className="panel-collapse collapse noScroll"
                      role="tabpanel"
                      aria-labelledby="heading2"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="panel-body">
                        <p className="panel-text mbr-fonts-style display-7">
                          არა, მაგრამ ყურებისას საჭმელზე არც იფიქრებთ.
                        </p>
                      </div>
                    </div>
                  </article>

                  {/* Q3 */}
                  <article className="card little-radius">
                    <header className="card-header" id="heading3" role="tab">
                      <button
                        className="panel-title collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3"
                        aria-expanded="false"
                        aria-controls="collapse3"
                      >
                        <h4 className="panel-title-edit mbr-fonts-style display-4 fw-bold">
                          რა დროებში ხართ ღია?
                        </h4>
                        <span className="sign mbr-iconfont mobi-mbri-arrow-down mobi-mbri"></span>
                      </button>
                    </header>

                    <div
                      id="collapse3"
                      className="panel-collapse collapse noScroll"
                      role="tabpanel"
                      aria-labelledby="heading3"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="panel-body">
                        <p className="panel-text mbr-fonts-style display-7">
                          18:00–21:00 ღია ვართ.
                        </p>
                      </div>
                    </div>
                  </article>

                  {/* Q4 */}
                  <article className="card little-radius">
                    <header className="card-header" id="heading4" role="tab">
                      <button
                        className="panel-title collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse4"
                        aria-expanded="false"
                        aria-controls="collapse4"
                      >
                        <h4 className="panel-title-edit mbr-fonts-style display-4 fw-bold">
                          თანხის უკან დაბრუნება შესაძლებელია?
                        </h4>
                        <span className="sign mbr-iconfont mobi-mbri-arrow-down mobi-mbri"></span>
                      </button>
                    </header>

                    <div
                      id="collapse4"
                      className="panel-collapse collapse noScroll"
                      role="tabpanel"
                      aria-labelledby="heading4"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="panel-body">
                        <p className="panel-text mbr-fonts-style display-7">
                          დიახ, მაგრამ მხოლოდ იმ შემთხვევაში თუ ბილეთიც დაბრუნდება.
                        </p>
                      </div>
                    </div>
                  </article>

                  {/* Q5 */}
                  <article className="card little-radius">
                    <header className="card-header" id="heading5" role="tab">
                      <button
                        className="panel-title collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse5"
                        aria-expanded="false"
                        aria-controls="collapse5"
                      >
                        <h4 className="panel-title-edit mbr-fonts-style display-4 fw-bold">
                          შემიძლია ფოტოების გადაღება?
                        </h4>
                        <span className="sign mbr-iconfont mobi-mbri-arrow-down mobi-mbri"></span>
                      </button>
                    </header>

                    <div
                      id="collapse5"
                      className="panel-collapse collapse noScroll"
                      role="tabpanel"
                      aria-labelledby="heading5"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="panel-body">
                        <p className="panel-text mbr-fonts-style display-7">
                          დიახ, მაგრამ ფლეშ ლაითის გარეშე.
                        </p>
                      </div>
                    </div>
                  </article>

                  {/* Q6 */}
                  <article className="card little-radius">
                    <header className="card-header" id="heading6" role="tab">
                      <button
                        className="panel-title collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse6"
                        aria-expanded="false"
                        aria-controls="collapse6"
                      >
                        <h4 className="panel-title-edit mbr-fonts-style display-4 fw-bold">
                          რა ხდება თუ დავაგვიანე?
                        </h4>
                        <span className="sign mbr-iconfont mobi-mbri-arrow-down mobi-mbri"></span>
                      </button>
                    </header>

                    <div
                      id="collapse6"
                      className="panel-collapse collapse noScroll"
                      role="tabpanel"
                      aria-labelledby="heading6"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="panel-body">
                        <p className="panel-text mbr-fonts-style display-7">
                          შეძლებისდაგვარად წყნარად შეგიშვებთ.
                        </p>
                      </div>
                    </div>
                  </article>

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
