import React, { useState } from "react";
import styled from "styled-components";

import Menu from "./Menu";

import logo from "../../images/random-logo.png";

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  &:hover {
    div:first-child,
    div:nth-child(3) {
      transform: ${({ open }) => (open ? "" : "scaleX(1)")};
    }
  }
  div {
    width: 2rem;
    height: 0.15rem;
    background: ${({ open }) => (open ? "white" : "white")};
    transition: all 300ms linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) =>
        open ? "rotate(45deg)" : "rotate(0) scaleX(0.5)"};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ open }) =>
        open ? "rotate(-45deg)" : "rotate(0) scaleX(0.7)"};
    }
  }
`;

const NavMobile = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="navbar">
      <div className="logo__wrapper">
        <img src={logo} alt="Company Logo" />
        <a href="#">HOME</a>
      </div>
      <StyledBurger open={open} onClick={toggle}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <Menu open={open} />
    </div>
  );
};

export default NavMobile;
