import { IOperator } from "./interfaces";

export const Operators: IOperator[] = [
    {
        id: 0,
        name: "MTS",
    },
    {
        id: 1,
        name: "Beeline",
    },
    {
        id: 2,
        name: "Megafon",
    },
];

export const OperatorConfig = {
    mask: "+7 999 999 99 99",
    minAmount: 1,
    maxAmount: 1000,
};

export const WarningMessage = {
    phone: "The phone number must be filled in",
    amount: `The amount must be in the range from ${OperatorConfig.minAmount} to ${OperatorConfig.maxAmount} rubles`,
    emptyOperator: "Operator name must be filled in",
    existOperator: "Operator with this name already exists",
};

export const PayResponseMessage = {
    success: "Success! The money will arrive in a few minutes",
    error: "Ooops... somthing went wrong",
};

export const AddOperatorMessage = "Success! The operator has been added";
