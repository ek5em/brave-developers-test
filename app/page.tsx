"use client";
import { useContext } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { OperatorsContext } from "./layout";
import { StyledTitle } from "@/components";
import { StyledUl, StyledLi } from "./HomeStyles";

const Home: NextPage = () => {
    const operators = useContext(OperatorsContext);
    return (
        <>
            <StyledTitle>Choose your operator</StyledTitle>
            <StyledUl>
                {operators.map((operator) => {
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
