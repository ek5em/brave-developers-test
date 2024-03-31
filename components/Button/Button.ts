import { theme } from "@/styles/theme";
import styled, { css } from "styled-components";

export enum EButton {
    nav,
    form,
}

export const Button = styled.button<{ type: EButton }>`
    border: none;
    cursor: pointer;
    font-weight: bold;
    transition: ${theme.transition};
    padding: 5px 10px;

    &:hover {
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(1px);
    }

    ${(props) =>
        props.type === EButton.nav &&
        css`
            background-color: transparent;
            border-bottom: 2px solid ${theme.colors.darkGreen};
            color: ${theme.colors.primary};
            font-size: ${theme.fontSize.medium};

            &:hover {
                border-radius: ${theme.borderRadius.small};
                background-color: ${theme.colors.secondary};
                color: ${theme.colors.white};
                border-color: transparent;
            }

            @media (${theme.media.medium}) {
                transition: 0;
                &:hover {
                    background-color: transparent;
                    color: ${theme.colors.primary};
                    border-color: ${theme.colors.darkGreen};
                }

                &:active {
                    background-color: ${theme.colors.secondary};
                    color: ${theme.colors.white};
                    border-color: transparent;
                }
            }
        `}

    ${(props) =>
        props.type === EButton.form &&
        css`
            padding: 5px 15px;
            color: ${theme.colors.darkGreen};
            background-color: ${theme.colors.primary};
            border-radius: ${theme.borderRadius.small};
            font-size: ${theme.fontSize.small};

            &:hover {
                background-color: ${theme.colors.secondary};
            }

            @media (${theme.media.medium}) {
                transition: 0;
                &:hover {
                    background-color: ${theme.colors.primary};
                }

                &:active {
                    background-color: ${theme.colors.secondary};
                }
            }
        `}
`;
