"use client"

import React, {useState} from 'react'
import {DotButton, useDotButton} from './EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";
import './embla.css'

const SlideCarousel = (props) => {
    const {slides, options} = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const [selectedImage, setSelectedImage] = useState(null);

    const {selectedIndex, scrollSnaps, onDotButtonClick} =
        useDotButton(emblaApi);

    function getSlideContent(element) {
        if (element.src) {
            return <>
                <div className={'carousel-image-container'} onClick={() => setSelectedImage(element)}>
                    <Image src={element.src} alt={element.alt} fill={true}
                           objectFit={'contain'}/>
                </div>
                {(element.showTitle || element['show-title']) && <div className={'carousel-image-title'}>
                    {element.alt}
                </div>}
            </>;
        } else if (element.youtube) {
            return <iframe className={'youtube-player'}
                    src={`https://www.youtube.com/embed/${element.youtube}`}
                           title={element.title ?? "Embedded video"}
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                           referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
        }
    }

    return <>
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((element, index) => <div className="embla__slide" key={index}>
                        <div className="embla__slide__contents">
                        {getSlideContent(element)}
                            </div>
                        </div>)}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />)}
                </div>
            </div>
        </section>
        {selectedImage && <div className={'fullscreen-image-viewer'} onClick={() => setSelectedImage(null)}>
            <div className={'fullscreen-image-viewer-cross'}/>
            <div className={'fullscreen-image-container'}>
                <Image src={selectedImage.src} alt={selectedImage.alt} fill={true} objectFit={'contain'}/>
            </div>
        </div>}
    </>;
}

export default SlideCarousel;
