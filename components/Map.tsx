/* eslint-disable @next/next/no-img-element */
"use client";

import "@/app/carousel.css";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from "embla-carousel-react";
import { useCallback } from "react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./CarouselArrowButtons";
import { DotButton, useDotButton } from "./CarouselDotButtons";

const images: string[] = ["/images/map-1.jpg", "/images/map-2.jpg"];

const imageByIndex = (index: number): string => images[index % images.length];

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Map = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay()]);

  const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const { autoplay } = emblaApi.plugins();
    if (!autoplay) return;
    if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onButtonClick
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onButtonClick);

  return (
    <section className="my-20">
      <h2 className="gradient-text">Find Our Congregation</h2>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {SLIDES.map(index => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div>
                <img
                  className="embla__slide__img map-img"
                  src={imageByIndex(index)}
                  alt="Your alt text"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Map;
