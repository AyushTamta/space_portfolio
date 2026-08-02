import React, { useEffect, useState } from "react";
import "./ExtraCurricular.css";

import art1 from "./art/art1.jpeg";
import art2 from "./art/art2.jpeg";
import art3 from "./art/art3.jpeg";
import art4 from "./art/art4.jpeg";
import art5 from "./art/art5.jpeg";
import art6 from "./art/art6.jpeg";
import art7 from "./art/art7.jpeg";
import art8 from "./art/art8.jpeg";

import p1 from "./photo/p1.jpeg";
import p2 from "./photo/p2.jpeg";
import p3 from "./photo/p3.jpeg";
import p4 from "./photo/p4.jpeg";
import p5 from "./photo/p5.jpeg";
import p6 from "./photo/p6.jpeg";
import p7 from "./photo/p7.jpeg";
import p8 from "./photo/p8.jpeg";

const galleries = {
  art: {
    label: "Artworks",
    eyebrow: "Visual experiments",
    description: "Sketches and studies shaped by observation, imagination, and an interest in visual storytelling.",
    images: [art1, art2, art3, art4, art5, art6, art7, art8],
  },
  photography: {
    label: "Photography",
    eyebrow: "Moments observed",
    description: "A collection of frames exploring atmosphere, perspective, light, and the quiet details around us.",
    images: [p1, p2, p3, p4, p5, p6, p7, p8],
  },
};

function ExtraCurricular() {
  const [galleryMode, setGalleryMode] = useState("art");
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const gallery = galleries[galleryMode];

  const changeGallery = (mode) => {
    setGalleryMode(mode);
    setActiveIndex(0);
  };

  const showPrevious = () => setActiveIndex((index) => (index - 1 + gallery.images.length) % gallery.images.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % gallery.images.length);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    if (isPaused || selectedImage) return undefined;
    const autoAdvance = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % gallery.images.length);
    }, 3200);
    return () => window.clearInterval(autoAdvance);
  }, [gallery.images.length, galleryMode, isPaused, selectedImage]);

  return (
    <section id="extra-curricular" className="extra-curricular" aria-labelledby="extra-title">
      <div className="extra-depth" aria-hidden="true">
        <div className="creative-orbit creative-orbit-one"></div>
        <div className="creative-orbit creative-orbit-two"></div>
        <div className="extra-stars">
          {[...Array(48)].map((_, i) => (
            <span key={i} style={{ top: `${(i * 43) % 100}%`, left: `${(i * 67) % 100}%`, animationDelay: `${(i % 9) * .45}s` }}></span>
          ))}
        </div>
      </div>

      <header className="extra-heading">
        <p>Beyond engineering</p>
        <h2 id="extra-title">Creative Observatory</h2>
        <span>Art and photography keep me curious, observant, and attentive to the details that shape good products.</span>
      </header>

      <div
        className={`observatory-shell ${isPaused ? "is-paused" : ""}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <aside className="observatory-sidebar">
          <p className="gallery-switcher-label">Explore both collections</p>
          <div className="gallery-switcher" role="tablist" aria-label="Creative galleries">
            {Object.entries(galleries).map(([key, item], index) => (
              <button
                type="button"
                role="tab"
                aria-selected={galleryMode === key}
                className={galleryMode === key ? "active" : ""}
                onClick={() => changeGallery(key)}
                key={key}
              >
                <span className="collection-number">0{index + 1}</span>
                <span className="collection-copy">
                  <strong>{item.label}</strong>
                  <small>08 works · Open collection</small>
                </span>
                <span className="collection-arrow" aria-hidden="true">→</span>
              </button>
            ))}
          </div>

          <div className="gallery-story">
            <span>{gallery.eyebrow}</span>
            <h3>{gallery.label}</h3>
            <p>{gallery.description}</p>
          </div>

          <div className="gallery-progress" aria-label={`Image ${activeIndex + 1} of ${gallery.images.length}`}>
            <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
            <span></span>
            <small>{String(gallery.images.length).padStart(2, "0")}</small>
          </div>
        </aside>

        <div className="observatory-stage">
          <div className="stage-coordinate coordinate-top">CREATIVE ARCHIVE / {galleryMode.toUpperCase()}</div>
          <button
            type="button"
            className="featured-frame"
            onClick={() => setSelectedImage(gallery.images[activeIndex])}
            aria-label={`Open ${gallery.label} image ${activeIndex + 1}`}
          >
            <img className="featured-backdrop" src={gallery.images[activeIndex]} alt="" aria-hidden="true" />
            <img className="featured-image" src={gallery.images[activeIndex]} alt={`${gallery.label} ${activeIndex + 1}`} />
            <span className="frame-corner frame-corner-one"></span>
            <span className="frame-corner frame-corner-two"></span>
            <span className="frame-corner frame-corner-three"></span>
            <span className="frame-corner frame-corner-four"></span>
            <span className="expand-label">Open full view</span>
          </button>

          <div className="stage-controls">
            <button type="button" onClick={showPrevious} aria-label="Previous image">←</button>
            <span>Navigate archive</span>
            <button type="button" onClick={showNext} aria-label="Next image">→</button>
          </div>
        </div>

        <div className="thumbnail-constellation" aria-label={`${gallery.label} automatically scrolling thumbnails`}>
          <div className="thumbnail-track">
          {[...gallery.images, ...gallery.images].map((image, index) => {
            const imageIndex = index % gallery.images.length;
            return (
            <button
              type="button"
              className={activeIndex === imageIndex ? "active" : ""}
              onClick={() => setActiveIndex(imageIndex)}
              aria-label={`Show ${gallery.label} image ${imageIndex + 1}`}
              aria-pressed={activeIndex === imageIndex}
              key={`${image}-${index}`}
            >
              <img src={image} alt="" />
              <span>{String(imageIndex + 1).padStart(2, "0")}</span>
            </button>
            );
          })}
          </div>
        </div>
        <p className="auto-scroll-status"><span></span> Auto-scrolling · Hover to pause</p>
      </div>

      {selectedImage && (
        <div className="image-modal" role="dialog" aria-modal="true" aria-label="Expanded gallery image" onClick={() => setSelectedImage(null)}>
          <button type="button" className="modal-close" onClick={() => setSelectedImage(null)} aria-label="Close image">×</button>
          <div className="modal-container" onClick={(event) => event.stopPropagation()}>
            <img src={selectedImage} alt="Expanded creative work" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
}

export default ExtraCurricular;
