import { theme } from "@/styles/theme";
import { spin } from "@/styles/animations";
import styled from "styled-components";

export const StyledLoader = styled.div`
    color: ${theme.colors.lightBlue};
`;

export const Ring = styled.div`
    width: 15px;
    height: 15px;
    margin: 0 auto;
    padding: 10px;
    margin: 10px;
    border: 7px dashed ${theme.colors.lightBlue};
    border-radius: 100%;

    animation: ${spin} 2s 0.3s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
`;
