"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { NextPage } from "next";
import { useParams, useRouter } from "next/navigation";
import { IResponse, IWarning } from "@/interfaces";
import {
    Button,
    EButton,
    InputWrapper,
    Loader,
    Modal,
    StyledForm,
    StyledTitle,
    Warning,
} from "@/components";
import { OperatorConfig, WarningMessage } from "@/constants";

import InputMask from "react-input-mask";
import Head from "next/head";
import { payAmount } from "@/API/PayAmount";
import { StyledPayment } from "./StyledPayment";


enum EPaymentWarning {
    amount = "amount",
    phone = "phone",
}

const Payment: NextPage = () => {
    const { operatorName } = useParams();
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [paymentAmount, setPaymentAmount] = useState<string>("");
    const [paymentStatus, setPaymentStatus] = useState<IResponse>({
        success: false,
        message: "",
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [warning, setWarning] = useState<IWarning>({
        amount: false,
        phone: false,
    });

    const phoneRef = useRef<HTMLDivElement>(null);
    const amountRef = useRef<HTMLInputElement>(null);

    const router = useRouter();

    const goBack = () => {
        router.back();
    };

    const clearForm = () => {
        setPhoneNumber("");
        setPaymentAmount("");
        setIsLoading(false);
        setWarning({ amount: false, phone: false });
    };

    const clearWarning = (type: EPaymentWarning) => {
        setWarning((prev) => {
            return { ...prev, [type]: "" };
        });
    };

    const checkValid = () => {
        const amount = Number(paymentAmount);
        const phoneValid =
            phoneNumber.replace("_", "").length === OperatorConfig.mask.length;

        const amountValid =
            amount >= OperatorConfig.minAmount &&
            amount <= OperatorConfig.maxAmount;

        setWarning({ amount: !amountValid, phone: !phoneValid });

        !amountValid && amountRef.current?.focus();
        !phoneValid &&
            phoneRef?.current?.getElementsByTagName("input")[0].focus();

        return { phoneValid, amountValid };
    };

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { amountValid, phoneValid } = checkValid();
        if (amountValid && phoneValid) {
            setIsLoading(true);
            const res = await payAmount();
            res && setPaymentStatus(res);
            clearForm();
        }
    };

    const changePhoneHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };

    const changeAmountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newAmount = e.target.value;
        setPaymentAmount(Number(newAmount) < 0 ? "" : newAmount);
    };

    return (
        <>
            <Head>
                <title>Payment: {operatorName}</title>
            </Head>
            <StyledPayment>
                <StyledTitle>Payment by {operatorName}</StyledTitle>
                <StyledForm onSubmit={submitHandler}>
                    <InputWrapper ref={phoneRef} warning={warning.phone}>
                        <InputMask
                            value={phoneNumber}
                            mask={OperatorConfig.mask}
                            placeholder="Enter your phone number"
                            onChange={changePhoneHandler}
                        />
                    </InputWrapper>
                    <InputWrapper warning={warning.amount}>
                        <input
                            ref={amountRef}
                            type="number"
                            value={paymentAmount ?? ""}
                            placeholder="Enter amount"
                            onChange={changeAmountHandler}
                        />
                    </InputWrapper>
                    {(warning.phone || warning.amount) && (
                        <div>
                            {warning.phone && (
                                <Warning
                                    message={WarningMessage.phone}
                                    clear={() =>
                                        clearWarning(EPaymentWarning.phone)
                                    }
                                />
                            )}
                            {warning.amount && (
                                <Warning
                                    message={WarningMessage.amount}
                                    clear={() =>
                                        clearWarning(EPaymentWarning.amount)
                                    }
                                />
                            )}
                        </div>
                    )}
                    <Button type={EButton.form}>Pay</Button>
                </StyledForm>
                <Button type={EButton.nav} onClick={goBack}>
                    Back
                </Button>
            </StyledPayment>
            {isLoading && <Loader />}
            {paymentStatus.message && <Modal {...paymentStatus} />}
        </>
    );
};

export default Payment;
