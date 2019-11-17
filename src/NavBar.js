import React, { useState, useLayoutEffect } from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";
import colors from "./colors";

const color = "#455073";

const NavBar = () => {
  const [padding, setPadding] = useState(15);

  useLayoutEffect(() => {
    padding > 60 ? setPadding(15) : null;
  }, [padding]);

  return (
    <header
      onClick={() => setPadding(padding + 15)}
      css={css`
        background-color: ${colors.secondary};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        role="img"
        aria-label="logo"
        css={css`
          font-size: 60px;

          &:hover {
            text-decoration: underline;
          }
        `}
      >
        🐶
      </span>
    </header>
  );
};

export default NavBar;
