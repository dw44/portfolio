import styled from 'styled-components';

const StyledHamburger = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transform: scale(1.5);

  .menuIconCheckbox {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    z-index: 2;
    -webkit-touch-callout: none;
    position: absolute;
    opacity: 0;
  }

  div {
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 22px;
    height: 12px;
  }

  span {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background-color: #000;
    border-radius: 1px;
    transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

    &:first-of-type {
      top: 0;
    }

    &:last-of-type {
      bottom: 0;
    }
  }

  &.active,
  .menuIconCheckbox:checked + div {
    span {
      &:first-of-type {
        transform: rotate(45deg);
        top: 5px;
      }
      &:last-of-type {
        transform: rotate(-45deg);
        bottom: 5px;
      }
    }
  }

  &.active:hover span:first-of-type,
  &.active:hover span:last-of-type,
  &:hover .menuIconCheckbox:checked + div span:first-of-type,
  &:hover .menuIconCheckbox:checked + div span:last-of-type {
    width: 22px;
  }

  &:hover {
    // no need hover effect on mobile.
    @media (min-width: 1024px) {
      span:first-of-type {
        width: 26px;
      }

      span:last-of-type {
        width: 12px;
      }
    }
  }
`;

export default function Hamburger() {
  return (
    <StyledHamburger>
      <input className="menuIconCheckbox" type="checkbox" />
      <div>
        <span />
        <span />
      </div>
    </StyledHamburger>
  );
}
