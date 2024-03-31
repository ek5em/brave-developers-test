import styled from "styled-components";
import { center } from "@/styles/global";
import { theme } from "@/styles/theme";

export const StyledForm = styled.form`
    ${center}
    flex-direction: column;
    background-color: ${theme.colors.darkGreen};
    padding: 60px 40px;
    border-radius: ${theme.borderRadius.medium};
    gap: 40px;
    width: 300px;

    @media (${theme.media.small}) {
        padding: 60px 30px;
        width: 250px;
    }
`;
