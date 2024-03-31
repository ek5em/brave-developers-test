import { center } from "@/styles/global";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StyledHeader = styled.header`
    ${center};
    background-color: ${theme.colors.green};
    ${theme.sizes.header};
`;

export const StyledDiv = styled.div`
    ${center};
    width: 50%;    
`;
