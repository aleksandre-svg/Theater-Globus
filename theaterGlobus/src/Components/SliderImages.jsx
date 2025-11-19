// src/components/SliderImages.jsx
import React, { useEffect, useRef } from "react";
import EmblaCarousel from "embla-carousel";

const SliderImages = () => {
  const viewportRef = useRef(null);
  const emblaRef = useRef(null);

  useEffect(() => {
    if (viewportRef.current) {
      emblaRef.current = EmblaCarousel(viewportRef.current, {
        loop: true,
        align: "center",
        draggable: true,
        skipSnaps: false,
      });
    }

    return () => {
      if (emblaRef.current) emblaRef.current.destroy();
    };
  }, []);

  const goPrev = () => {
    if (emblaRef.current) emblaRef.current.scrollPrev();
  };

  const goNext = () => {
    if (emblaRef.current) emblaRef.current.scrollNext();
  };

  const images = [
    {
      src: "/images/d3977e4b-1d46-4c78-a96a-f23c41a2893a.jpg",
      alt: "Stage Lighting and Props at Theater Globus",
    },
    {
      src: "/images/b905c709-44b1-457f-beb2-c7ab34be6400.jpg",
      alt: "Actors rehearsing at Theater Globus",
    },
    {
      src: "/images/4e7b8664-cfd0-4d91-bff4-947198410ad5.jpg",
      alt: "Emotional scene performance — Theater Globus",
    },
    {
      src: "/images/9c6dcfdc-8579-4951-b8ab-69cb0acced48.jpg",
      alt: "Stage scenery and lights at Theater Globus",
    },
    {
      src: "/images/0af4eebe-0091-4ee6-8c4a-13f396c2796a.jpg",
      alt: "Performance moment at Theater Globus",
    },
    {
      src: "/images/64f9138e-544c-4436-b34c-d08238448e2c.jpg",
      alt: "Backstage at Theater Globus",
    },
    {
      src: "/images/4fc1a13f-5a2b-4ea7-810f-fefa3648ae8b.jpg",
      alt: "Actors ready to perform — Theater Globus",
    },
  ];

  return (
    <section
      id="slider"
      aria-label="Theater Globus Image Slider"
      className="slider02 mbr-embla strengthm5 cid-v20nubcC2r"
      
    >
      <div className="container-fluid content-wrap">
        <div className="row justify-content-center align-items-center">

          {/* LEFT TEXT SECTION */}
          <div className="col-12 col-lg-3">
            <header className="content-wrapper">
              <h2 className="mbr-section-title display-2 fw-bold">
                თეატრი ადამიანს
              </h2>
              <h3 className="mbr-section-subtitle display-2 fw-bold">
                გააკეთილშობილებს
              </h3>
              <p className="mbr-text display-7">
                სცენა ის სამყაროა, სადაც რეალობა ხელოვნებად იქცევა.
              </p>
            </header>
          </div>

          {/* SLIDER */}
          <div className="col-12 col-lg-7" style={{height: "500px"}}>
            <div className="embla">

              {/* Viewport */}
              <div className="embla__viewport" ref={viewportRef}>
                <div className="embla__container" style={{height: "600px"}}>

                  {images.map((img, i) => (
                    <div key={i} className="embla__slide slider-image item" style={{height: "100%"}}>
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-100 little-radius"
                        style={{height: "100%"}}
                      />
                    </div>
                  ))}

                </div>
              </div>

              {/* Buttons */}
              <button
                type="button"
                className="embla__button embla__button--prev"
                onClick={goPrev}
                aria-label="Previous slide"
              >
                <span
                  aria-hidden="true"
                  className="mobi-mbri mobi-mbri-arrow-prev mbr-iconfont"
                ></span>
              </button>

              <button
                type="button"
                className="embla__button embla__button--next"
                onClick={goNext}
                aria-label="Next slide"
              >
                <span
                  aria-hidden="true"
                  className="mobi-mbri mobi-mbri-arrow-next mbr-iconfont"
                ></span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SliderImages;
