import { createGlobalStyle, css } from "styled-components";
import { theme } from "./theme";

export default createGlobalStyle`
    * {
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none;
    color:inherit;
}

body {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
}
`;

export const center = css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
