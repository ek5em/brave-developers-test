import styled from "styled-components";
import { center } from "@/styles/global";
import { fadeIn } from "@/styles/animations";

export const Container = styled.main`
    ${center}
    padding: 10vh 0;
    flex-direction: column;

    & > * {
        opacity: 0;
        animation: ${fadeIn} 0.4s 1ms linear 1 normal forwards;
    }
`;
