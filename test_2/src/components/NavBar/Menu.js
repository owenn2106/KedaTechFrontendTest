import React from "react";

import styled from "styled-components";

const StyledMenu = styled.ul`
  position: fixed;
  top: 0;
  right: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  opacity: ${({ open }) => (open ? "1" : "0")};

  background-color: rgb(20, 26, 31);
  z-index: 9;

  li {
    padding: 1.5em 0;
    font-size: 2rem;
    font-weight: 800;

    &:last-child {
      a {
        color: #51d2f2;
        border: 1px solid #51d2f2;
        border-radius: 10px;
        padding: 0.5em 3em;

        transition: all 0.3s ease;

        &:hover {
          color: white;
          background-color: #51d2f2;
        }
      }
    }

    a {
      color: white;
    }
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <li>
        <a href="#">ABOUT</a>
      </li>
      <li>
        <a href="#">PRICING</a>
      </li>
      <li>
        <a href="#">CONTACT</a>
      </li>
      <li>
        <a href="#">LOGIN</a>
      </li>
    </StyledMenu>
  );
};

export default Menu;
