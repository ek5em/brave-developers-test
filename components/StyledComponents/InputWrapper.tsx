import { shake, spin } from "@/styles/animations";
import { theme } from "@/styles/theme";
import styled, { css } from "styled-components";

export const InputWrapper = styled.div<{ warning: boolean }>`
    input {
        font-size: ${theme.fontSize.small};
        border: 0;
        border-bottom: 1px solid ${theme.colors.secondary};
        color: ${theme.colors.white};
        padding: 3px 10px;
        background-color: transparent;
        outline: none;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    input:focus {
        border-bottom: 1px solid ${theme.colors.primary};
    }

    ${(props) =>
        props.warning &&
        css`
            input {
                border-color: ${theme.colors.danger};

                &:focus {
                    border-bottom: 1px solid ${theme.colors.danger};
                }

                animation: ${shake} 0.5s 0.1s linear 1;
            }
        `}
`;
