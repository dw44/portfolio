import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const StyledCarousel = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  border-radius: inherit;
  position: relative;

  & > * {
    border-radius: inherit;
  }

  .index {
    position: absolute;
    top: 1.25rem;
    left: 40%;
    z-index: 20;
    color: #fff;
  }

  .btn-prev,
  .btn-next {
    cursor: pointer;
    position: absolute;
    width: auto;
    bottom: 16px;
    padding: 16px;
    color: #fff;
    font-weight: bold;
    font-size: 1.125rem;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    border: none;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 20;
  }

  .btn-prev {
    left: 0;
  }

  .btn-next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .btn-prev:hover,
  .btn-next:hover {
    background-color: rgba(0,0,0,0.8);
  }

  .placeholder-slide {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    transition: opacity 0.75s ease-in;
    z-index: 19;
    object-fit: contain;
  }
`;

export default function Carousel({ title, image }) {
  const [index, setIndex] = useState(0);

  const carouselNavigation = (targetIndex) => {
    if (targetIndex < 0) {
      setIndex(3);
    } else if (targetIndex > 3) {
      setIndex(0);
    } else {
      setIndex(targetIndex);
    }
  };

  return (
    <StyledCarousel>
      <h1 className="index">
        {index + 1}
        {' '}
        / 4
      </h1>
      <button className="btn-next" type="button" onClick={() => carouselNavigation(index + 1)}>&#10095;</button>
      <button className="btn-prev" type="button" onClick={() => carouselNavigation(index - 1)}>&#10094;</button>
      <div style={{ opacity: index === 0 ? 1 : 0 }} className="placeholder-slide" />
      <div style={{ opacity: index === 1 ? 1 : 0 }} className="placeholder-slide" />
      <img
        style={{ opacity: index === 2 ? 1 : 0 }}
        className="placeholder-slide"
        src={`/screen_captures/${image}_dt_mac.png`}
        alt={title}
      />
      <img
        style={{ opacity: index === 3 ? 1 : 0 }}
        className="placeholder-slide"
        src={`/screen_captures/${image}_mobile.png`}
        alt={title}
      />
    </StyledCarousel>
  );
}
