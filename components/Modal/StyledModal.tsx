import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StyledBlock = styled.div<{ success: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    border-radius: ${theme.borderRadius.medium};
    background-color: ${theme.colors.white};
    color: ${theme.colors.danger};

    ${(props) =>
        props.success &&
        `
        color: ${theme.colors.primary};        
    `}
`;
