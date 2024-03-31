import { keyframes } from "styled-components";

export const spin = keyframes` 
        from {transform: rotate(0deg)}
        50% {transform: rotate(180deg)}
        to {transform: rotate(360deg)}
`;

export const shake = keyframes`
    from{transform: translateX(0)}
    25% {transform: translateX(-5px)}
    50% {transform: translateX(5px)}
    75% {transform: translateX(-5px)}
    to {transform: translateX(0)}
`;

export const fadeIn = keyframes`
    from{opacity:0}
    50% {opacity:0.7}
    to{opacity:1}
`;
