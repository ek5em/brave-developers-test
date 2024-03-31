import styled from "styled-components";
import { theme } from "@/styles/theme";

export const StyledWarning = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.danger};
    color: ${theme.colors.white};
    padding: 5px;
    margin-bottom: 5px;
    gap: 10px;
    border-radius: ${theme.borderRadius.small};

    img {
        cursor: pointer;
    }
`;
