import React, { FC } from "react";
import { Ring, StyledLoader } from "./StyledLoader";
import { StyledModal } from "..";

export const Loader: FC = () => {
    return (
        <StyledModal>
            <StyledLoader>
                <Ring />
                <p>Loading...</p>
            </StyledLoader>
        </StyledModal>
    );
};
