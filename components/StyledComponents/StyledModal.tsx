import { center } from "@/styles/global";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StyledModal = styled.div`
    ${center}
    position: fixed;
    height: 100vh;
    width: calc(100vw - 20px);
    background-color: ${theme.colors.modal};
    top: 0;
    left: 0;
    padding: 10px;
`;
