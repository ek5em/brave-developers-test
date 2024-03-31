"use client";
import { NextPage } from "next";
import Link from "next/link";
import { StyledTitle } from "@/components";
import { StyledUl, StyledLi } from "./HomeStyles";
import { Operators } from "@/constants";

const Home: NextPage = () => {
    return (
        <>
            <StyledTitle>Choose your operator</StyledTitle>
            <StyledUl>
                {Operators.map((operator) => {
                    return (
                        <StyledLi key={operator.id}>
                            <Link href={`/payment/${operator.name}`}>
                                <span>{operator.name}</span>
                            </Link>
                        </StyledLi>
                    );
                })}
            </StyledUl>
        </>
    );
};

export default Home;
