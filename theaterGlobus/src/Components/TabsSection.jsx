// src/components/TabsSection.jsx
import React from "react";

const TabsSection = () => {
  return (
    <section
      id="tabs"
      aria-label="Theater Globus tabbed features"
      className="tabs01 tabs strengthm5 cid-v20nubcyXV"
    >
      <div className="container-fluid">
        <div className="row justify-content-center">

          <div className="col-12 col-lg-10">

            <div className="card-wrapper flex-row-reverse">

              {/* IMAGE SIDE */}
              <div className="image-wrapper">
                <img
                  src="/images/d3977e4b-1d46-4c78-a96a-f23c41a2893a.jpg"
                  alt="Theater stage at Globus"
                  className="little-radius"
                  loading="lazy"
                />
              </div>

              {/* CONTENT / TABS */}
              <div className="content-wrapper">

                <div className="tabs-wrapper">
                  <ul className="nav nav-tabs" role="tablist">

                    {/* TAB 1 BUTTON */}
                    <li className="nav-item">
                      <button
                        className="nav-link active mbr-fonts-style little-radius display-4"
                        id="tab1-btn"
                        data-bs-toggle="tab"
                        data-bs-target="#tab1"
                        role="tab"
                        aria-controls="tab1"
                        aria-selected="true"
                      >
                        დამთრგუნველი სიმყუდროვე
                      </button>
                    </li>

                    {/* TAB 2 BUTTON */}
                    <li className="nav-item">
                      <button
                        className="nav-link mbr-fonts-style little-radius display-4"
                        id="tab2-btn"
                        data-bs-toggle="tab"
                        data-bs-target="#tab2"
                        role="tab"
                        aria-controls="tab2"
                        aria-selected="false"
                      >
                        სუფთა ტალანტი მსახიობები
                      </button>
                    </li>

                    {/* TAB 3 BUTTON */}
                    <li className="nav-item">
                      <button
                        className="nav-link mbr-fonts-style little-radius display-4"
                        id="tab3-btn"
                        data-bs-toggle="tab"
                        data-bs-target="#tab3"
                        role="tab"
                        aria-controls="tab3"
                        aria-selected="false"
                      >
                        დაუიწყარი საათები
                      </button>
                    </li>

                  </ul>
                </div>

                {/* TAB CONTENT */}
                <div className="tab-content mt-4">

                  {/* TAB 1 CONTENT */}
                  <article
                    className="tab-pane fade show active"
                    id="tab1"
                    role="tabpanel"
                    aria-labelledby="tab1-btn"
                  >
                    <div className="item-content">

                      <div className="image-wrap">
                        
                      </div>

                      <h4 className="item-title mbr-fonts-style display-5 fw-bold">
                        დამთრგუნველი სიმყუდროვე
                      </h4>

                      <h5 className="item-subtitle mbr-fonts-style display-5 fw-bold">
                        დეტალები
                      </h5>

                      <p className="item-text mbr-fonts-style display-7">
                        ჩვენი თეატრი გამოირჩევა სიმყუდროვით, სუფთა ხმის იზოლაციით
                        და ზედმეტი ხმაურის გარეშე.
                      </p>

                    </div>
                  </article>

                  {/* TAB 2 CONTENT */}
                  <article
                    className="tab-pane fade"
                    id="tab2"
                    role="tabpanel"
                    aria-labelledby="tab2-btn"
                  >
                    <div className="item-content">

                      <div className="image-wrap">
                       
                      </div>

                      <h4 className="item-title mbr-fonts-style display-5 fw-bold">
                        არაჩვეულებრივი თამაშის დონის მსახიობები
                      </h4>

                      <p className="item-text mbr-fonts-style display-7">
                        ტალანტი იგრძნობა შესვლისთანავე.
                      </p>

                    </div>
                  </article>

                  {/* TAB 3 CONTENT */}
                  <article
                    className="tab-pane fade"
                    id="tab3"
                    role="tabpanel"
                    aria-labelledby="tab3-btn"
                  >
                    <div className="item-content">

                      <div className="image-wrap">
                        
                      </div>

                      <h4 className="item-title mbr-fonts-style display-5 fw-bold">
                        დაუიწყარი საათები
                      </h4>

                      <p className="item-text mbr-fonts-style display-7">
                        ჩვენს თეატრში გატარებული საათები მთელი ცხოვრება
                        დაგამახსოვრდებათ.
                      </p>

                    </div>
                  </article>

                </div>
                {/* END TAB CONTENT */}

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TabsSection;
