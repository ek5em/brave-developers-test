import { center } from "@/styles/global";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StyledUl = styled.ul`
    ${center}
    justify-content: flex-start;
    gap: 15px;
    list-style: none;
    flex-wrap: wrap;
    ${theme.sizes.operatorsList}

    @media (${theme.media.small}) {
        flex-direction: column;
    }
`;

export const StyledLi = styled.li`
    ${center}
    background-color: ${theme.colors.lightBlue};
    border: 1px solid ${theme.colors.darkGreen};
    border-radius: ${theme.borderRadius.small};
    width: 150px;
    height: 50px;
    transition: ${theme.transition};
    box-sizing: border-box;

    &:hover {
        border-color: ${theme.colors.primary};
        background-color: ${theme.colors.secondary};
        scale: 1.1;
    }

    a {
        ${center}
        height: 100%;
        width: 100%;
        color: ${theme.colors.darkGreen};
    }

    span {
        padding: 0 15px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media (${theme.media.small}) {
        width: 250px;
    }
`;
