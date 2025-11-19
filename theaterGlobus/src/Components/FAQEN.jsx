// src/components/FAQEN.jsx
import React from "react";

const FAQEN = () => {
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
                      Any Questions?
                    </h2>
                    <h3 className="mbr-section-subtitle mbr-fonts-style display-2 fw-bold">
                      We’ve Got the Answers
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
                          What is the dress code?
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
                          Whatever you like and whatever feels comfortable.
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
                          Can I bring food inside?
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
                          No, but during the show you won’t even think about food.
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
                          What are your opening hours?
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
                          We are open from 18:00 to 21:00.
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
                          Can I get a refund?
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
                          Yes, but only if the ticket is returned as well.
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
                          Can I take photos?
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
                          Yes, but without flash.
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
                          What happens if I am late?
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
                          We will let you in as quietly as possible.
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

export default FAQEN;
