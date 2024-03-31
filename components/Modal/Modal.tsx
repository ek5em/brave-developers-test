import { IResponse } from "@/interfaces";
import Link from "next/link";
import { FC } from "react";
import { StyledBlock } from "./StyledModal";
import { Button, EButton, StyledModal } from "..";

export const Modal: FC<IResponse> = ({ message, success }) => {
    return (
        <StyledModal>
            <StyledBlock success={success}>
                <h2>{message}</h2>
                <Link href={"/"}>
                    <Button type={EButton.nav}>Home</Button>
                </Link>
            </StyledBlock>
        </StyledModal>
    );
};
