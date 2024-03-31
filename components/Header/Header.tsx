import Link from "next/link";
import { FC } from "react";
import { StyledHeader, StyledDiv } from "./HeaderStyles";
import { Button, EButton } from "..";

export const Header: FC = () => {
    return (
        <StyledHeader>
            <StyledDiv>
                <Link href={"/"}>
                    <Button type={EButton.nav}>Operators</Button>
                </Link>
            </StyledDiv>
            <StyledDiv>
                <Link href={"/newOperator"}>
                    <Button type={EButton.nav}>Add operator</Button>
                </Link>
            </StyledDiv>
        </StyledHeader>
    );
};
