"use client";
import { ChangeEvent, FormEvent, useContext, useRef, useState } from "react";
import { NextPage } from "next";
import { AddOperatorMessage, WarningMessage } from "@/constants";
import { OperatorsContext } from "../layout";
import {
    Modal,
    Warning,
    StyledForm,
    StyledTitle,
    Button,
    EButton,
    InputWrapper,
} from "@/components";

const NewOperator: NextPage = () => {
    const [newOperator, setNewOperator] = useState<string>("");
    const [operatorWarning, setOperatorWarning] = useState<string>("");
    const [isOperatorAdded, setIsOperatorAdded] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const operators = useContext(OperatorsContext);

    const clearWarning = () => {
        setOperatorWarning("");
    };

    const checkValid = () => {
        if (!newOperator) {
            setOperatorWarning(WarningMessage.emptyOperator);
            inputRef.current?.focus();
            return false;
        }
        if (
            operators.find(
                (el) => el.name.toLowerCase() === newOperator.toLowerCase()
            )
        ) {
            setOperatorWarning(WarningMessage.existOperator);
            inputRef.current?.focus();
            return false;
        }
        return true;
    };

    const sumbitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (checkValid()) {
            operators.push({
                id: operators.length,
                name: newOperator,
            });
            setIsOperatorAdded(true);
        }
    };

    const changeOperatorHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewOperator(e.target.value);
    };

    return (
        <>
            <StyledTitle>Add new operator</StyledTitle>
            <StyledForm onSubmit={sumbitHandler}>
                <InputWrapper warning={operatorWarning ? true : false}>
                    <input
                        ref={inputRef}
                        type="text"
                        value={newOperator}
                        onChange={changeOperatorHandler}
                        placeholder="Enter your operator"
                    />
                </InputWrapper>
                {operatorWarning && (
                    <Warning message={operatorWarning} clear={clearWarning} />
                )}
                <Button type={EButton.form}>Add</Button>
            </StyledForm>
            {isOperatorAdded && <Modal success message={AddOperatorMessage} />}
        </>
    );
};

export default NewOperator;
